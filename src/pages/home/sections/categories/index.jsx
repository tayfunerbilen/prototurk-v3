import Section from "~/components/section";
import Slider from "~/components/slider";
import CategoryCard from "~/components/cards/category";
import {getCategories} from "~/services/home";
import {useQuery} from "@tanstack/react-query";

export default function Categories() {

  const {data, isLoading, isError, error } = useQuery(['categories'], () => getCategories(), {
    retry: 2,
    refetchOnWindowFocus: false
  })

  console.log(
    'isError', isError
  )
  console.log(
    'error', error
  )

  return (
    <Section
      title="Kendine değer kat!"
      description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
    >
      {isLoading && '.....'}
      {isError && (
        <div className="bg-red-50 p-4 text-sm rounded text-red-500">
          {error.message}
        </div>
      )}
      {data && (
        <Slider
          breakpoints={{
            340: {
              spaceBetween: 15,
              slidesPerView: 2
            },
            950: {
              slidesPerView: 3
            },
            1170: {
              slidesPerView: 4
            },
            1370: {
              slidesPerView: 5
            },
          }}
          items={data}
          render={(item) => <CategoryCard item={item} />}
        />
      )}
    </Section>
  )
}
