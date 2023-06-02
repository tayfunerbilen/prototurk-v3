import Section from "~/components/section";
import Slider from "~/components/slider";
import { articles as data } from "~/fake-api";
import ArticleCard from "~/components/cards/article";

export default function Articles() {
  return (
    <Section
      title="Yenilikleri birlikte takip edelim!"
      description="Her gün yeni bir şeyler çıkıyor ve gelişim durmadan devam ediyor. Kalemine değil koduna güveniyorsan gel birlikte anlatalım tüm bu yenilikleri."
    >
      <Slider
        breakpoints={{
          700: {
            slidesPerView: 1
          },
          1370: {
            slidesPerView: 2
          },
        }}
        items={data}
        render={item => <ArticleCard item={item} />}
      />
    </Section>
  )
}
