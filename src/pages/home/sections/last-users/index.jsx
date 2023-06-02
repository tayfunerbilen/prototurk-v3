import Section from "~/components/section";
import Slider from "~/components/slider";
import { users as data } from "~/fake-api";
import UserCard from "~/components/cards/user";

export default function LastUsers() {
  return (
    <Section
      title="Kimleri görüyoruz!"
      description="Hoşgeldin, evet sen de aramıza hoşgeldin. Bu ailenin bir parçası olmak istediğin için teşekkürler. Şimdi hemen birilerini takip etmeye başla ki akışın biraz canlansın!"
    >
      <Slider
        breakpoints={{
          640: {
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
        render={item => <UserCard item={item} />}
      />
    </Section>
  )
}
