import Section from "~/components/section";
import {articles} from "~/fake-api";
import ArticleCard from "~/components/cards/article";
import Pagination from "~/components/pagination";
import OpacityContent from "~/components/animated/opacity";

export default function Articles() {
  return (
    <OpacityContent className="max-w-[1200px] mx-auto">
      <Section
        title="Makaleler"
      >
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {articles.map((article, key) => <ArticleCard style={false} item={article} key={key} />)}
        </div>
        <Pagination count={24} />
      </Section>
    </OpacityContent>
  )
}
