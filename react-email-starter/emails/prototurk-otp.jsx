import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import config from "../../tailwind.config"

export default function PrototurkOtp() {
    return (
        <Html>
            <Head>
                <title>Prototurk OTP</title>
            </Head>
            <Preview>
                Prototurk'de oturum actin, lutfen onayla!
            </Preview>
            <Tailwind config={config}>
                <Body
                    style={{ borderTopWidth: 4, borderTopStyle: 'solid'}}
                    className="bg-[#fafafa] border-primary py-10 font-sans">
                    <Container>
                        <Section className="text-center mb-6">
                            <Img src="https://gitlab.com/assets/mailers/gitlab_logo-2957169c8ef64c58616a1ac3f4fc626e8a35ce4eb3ed31bb0d873712f2a041a0.png" height={55} className="inline" />
                        </Section>

                        <Section className="bg-white border border-[#ededed] text-center">
                            <Heading as="h4">
                                Help us protect your account
                            </Heading>
                            <Text className="text-xs px-14">
                                Before you sign in, we need to verify your identity. Enter the following code on the sign-in page.
                            </Text>
                            <Section className="w-[207px] h-[53px] bg-zinc-100 font-semibold text-lg tracking-widest">
                                071190
                            </Section>
                            <Text className="text-[10px] leading-4 px-14">
                                If you have not recently tried to sign into GitLab, we recommend <Button href="https://gitlab.com/-/user_settings/password/edit" className="text-[#3777b0]">changing your password</Button> and setting up Two-Factor Authentication to keep your account safe. Your verification code expires after 240 minutes.
                            </Text>
                        </Section>

                        <Section>
                            <Row>
                                <Column width={100}>
                                    kolon 1
                                </Column>
                                <Column>
                                    kolon 2
                                </Column>
                            </Row>
                        </Section>

                        <Section className="text-center mt-4">
                            <Img src="https://gitlab.com/assets/mailers/gitlab_logo_black_text-5430ca955baf2bbce6d3aa856a025da70ac5c9595597537254f665c10beab7a5.png" className="h-5 inline" />
                            <Text className="text-[13px] text-zinc-500">
                                You're receiving this email because of your account on gitlab.com. <Button href="https://gitlab.com/-/profile/notifications" className="text-[#3777b0]">Manage all notifications </Button> · <Button className="text-[#3777b0]" href="https://gitlab.com/help">Help</Button>
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}