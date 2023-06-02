import Categories from "./sections/categories";
import LastQuestions from "./sections/last-questions";
import Articles from "./sections/articles";
import LastUsers from "./sections/last-users";
import SocialCard from "~/components/cards/social";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">

      <Categories />

      <SocialCard
        type="twitter"
        ctaUrl="https://twitter.com/prototurkcom"
      />

      <LastQuestions />
      <Articles />

      <SocialCard
        type="instagram"
        ctaUrl="https://instagram.com/prototurk.official"
      />

      <LastUsers />

      <SocialCard
        type="telegram"
        ctaUrl="https://t.me/prototurk"
        ctaText="Gruba Katıl"
      />

    </div>
  )
}
