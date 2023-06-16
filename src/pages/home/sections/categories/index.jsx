import Section from "~/components/section";
import Slider from "~/components/slider";
import { categories as data } from "~/fake-api";
import CategoryCard from "~/components/cards/category";

export default function Categories() {
  return (
    <Section
      title="Kendine değer kat!"
      description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
    >
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
    </Section>
  )
}
