import { lastQuestions as data } from "~/fake-api";
import Section from "~/components/section";
import Slider from "~/components/slider";
import QuestionCard from "~/components/cards/question";

export default function LastQuestions() {
  return (
    <Section
      title="Birlikte daha güçlüyüz!"
      description="Kodlama yaparken takıldığında ya da bazen kafanı dağıtmaya ihtiyacın olduğunda soru & cevap bölümü seni bekliyor. Merak ettiklerini sor, bildiklerini cevapla!"
    >
      <Slider
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          950: {
            slidesPerView: 2
          },
          1370: {
            slidesPerView: 3
          },
        }}
        items={data}
        render={item => <QuestionCard item={item} />}
      />
    </Section>
  )
}
