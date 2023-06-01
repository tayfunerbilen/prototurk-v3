import Section from "~/components/section";
import { categories, lastQuestions, articles, users } from "~/fake-api";
import { AiFillFile } from "react-icons/ai"
import { BsCameraVideoFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import Slider from "~/components/slider";
import { timeAgo } from "~/utils/date";
import { getContrastColor } from "~/utils/helpers";
import Button from "~/components/button";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">

      <Section
        title="Kendine değer kat!"
        description="İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!"
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
          items={categories}
          render={(item) => (
            <Link
              style={{ '--color': item.color, '--text-color': getContrastColor(item.color) }}
              to={`/${item.slug}`}
              className="border border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md flex flex-col items-center justify-center px-5 py-7 group"
            >
              <div className="w-24 h-24 rounded-full border flex items-center justify-center border-[color:var(--color)] mb-2.5 relative before:w-24 before:h-24 before:absolute before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-10">
                <img src={item.icon} className="max-h-[50%]" />
              </div>
              <div className="h-9 px-4 text-15 font-medium rounded flex items-center justify-center text-[color:var(--text-color)] bg-[color:var(--color)]">
                {item.title}
              </div>
              <div className="border-t border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 grid grid-cols-2 gap-x-4 pt-4 mt-4 text-sm text-zinc-500 group-hover:text-black dark:group-hover:text-white">
                <div className="flex flex-col gap-y-1.5 items-center text-center">
                  <AiFillFile size={16} />
                  {item.articleCount} ders
                </div>
                <div className="flex flex-col gap-y-1.5 items-center text-center">
                  <BsCameraVideoFill size={16} />
                  {item.videoCount} video
                </div>
              </div>
            </Link>
          )}
        />
      </Section>

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
          items={lastQuestions}
          render={item => (
            <Link
              to={`/soru/${item.id}-${item.slug}`}
              className="bg-white dark:bg-zinc-900 dark:border-zinc-700 p-5 border hover:border-zinc-300 dark:hover:border-zinc-600 rounded-md flex flex-col relative before:w-[90%] before:rounded-b before:h-full before:absolute before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1]">
              <div className="flex items-center gap-x-2.5 text-sm text-blue-600 dark:text-blue-500 font-medium">
                <img src={item.user.avatar} className="w-6 h-6 rounded-full object-cover" />
                {item.user.name}
              </div>
              <h6 className="line-clamp-1 text-lg mt-2.5 mb-1 font-semibold text-primary dark:text-white">{item.title}</h6>
              <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>
            </Link>
          )}
        />
      </Section>

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
          items={articles}
          render={item => (
            <Link
              to={`/makaleler/${item.slug}`}
              className="bg-white dark:bg-zinc-900 dark:border-zinc-700 p-5 border hover:border-zinc-300 dark:hover:border-zinc-600 rounded-md flex flex-col relative before:w-[90%] before:rounded-b before:h-full before:absolute before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1]"
            >
              <div
                style={{ '--color': item.category.color, '--text-color': getContrastColor(item.category.color) }}
                className="h-8 px-4 rounded text-sm font-medium bg-[color:var(--color)] text-[color:var(--text-color)] self-start flex items-center"
              >
                {item.category.name}
              </div>
              <h6 className="text-xl font-medium my-2 dark:text-white line-clamp-1">{item.title}</h6>
              <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>

              <div className="flex mt-4 items-center gap-x-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                <img src={item.user.avatar} className="w-8 h-8 rounded-full object-cover" />
                {item.user.name}
              </div>
            </Link>
          )}
        />
      </Section>

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
          items={users}
          render={item => (
            <Link
              className="p-6 bg-white dark:bg-zinc-900 border hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md text-center flex flex-col gap-y-2.5 items-center justify-center relative before:w-[90%] before:rounded-b before:h-full before:absolute before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1]"
            >
              <img src={item.avatar} className="w-16 h-16 rounded-full" />
              <header>
                <h6 className="font-semibold text-primary line-clamp-1 dark:text-white">
                  @{item.name}
                </h6>
                <time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>
              </header>
              <Button size="small" className="w-full">Takip Et</Button>
            </Link>
          )}
        />
      </Section>

    </div>
  )
}
