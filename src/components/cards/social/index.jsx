import PropTypes from "prop-types"
import classNames from "classnames"
import { FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa"
import Button from "~/components/button"

function getSocialMediaIcon(type) {
  switch (type) {
    case 'twitter':
      return <FaTwitter size={45} className="relative -left-3" />
    case 'instagram':
      return <FaInstagram size={45} className="relative -left-3" />
    case 'telegram':
      return <FaTelegramPlane size={45} className="relative -left-3" />
  }
}

function getSocialMediaTitle(type) {
  switch (type) {
    case 'twitter':
      return <>Twitter&#39;da <b>@prototurkcom</b> hesabını takip etmeyi unutma!</>
    case 'instagram':
      return <>Instagram&#39;da <b>@prototurk.official</b> hesabını takip etmeyi unutma!</>
    case 'telegram':
      return 'Telegram grubumuza katıl!'
  }
}

function getSocialMediaDescription(type) {
  switch (type) {
    case 'twitter':
      return 'Hazırladığımız son videolardan anında haberdar olmak için twitter hesabımızı takip etmeyi unutma!'
    case 'instagram':
      return 'Kodlamayla ilgili ipucu ve kolay kullanımları paylaştığımız instagram hesabını takip etmeyi unutmayın.'
    case 'telegram':
      return 'Yüzlerce kişiyle anında konuşabileceğin telegram grubumuza katılmayı unutma.'
  }
}

export default function SocialCard({ type, ctaText, ctaUrl }) {
  return (
    <section className="border-b border-[#f3f6f9] dark:border-zinc-700 pb-10 mb-10 last:mb-0 last:border-0">
      <div className={classNames("px-6 md:px-10 py-5 rounded-md text-white flex flex-col md:flex-row md:items-center gap-y-5 gap-x-7", {
        "bg-[#1da1f2]": type === 'twitter',
        "bg-[#3b5998]": type === 'telegram',
        "bg-gradient-to-l from-[#405de6] via-[#833ab4] to-[#e1306c]": type === 'instagram'
      })}>
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white/10">
          {getSocialMediaIcon(type)}
        </div>
        <div>
          <h6 className="text-lg md:text-xl font-medium">
            {getSocialMediaTitle(type)}
          </h6>
          <p className="text-white/70 text-sm md:text-base mt-2 md:mt-0 mb-3">
            {getSocialMediaDescription(type)}
          </p>
          <Button
            as="a"
            target="_blank"
            href={ctaUrl}
            variant="light"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}

SocialCard.propTypes = {
  type: PropTypes.oneOf(['telegram', 'instagram', 'twitter']),
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
}

SocialCard.defaultProps = {
  ctaText: 'Takip Et'
}
