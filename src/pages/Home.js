import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {useMoralis, } from "react-moralis";
import styled from "styled-components";
import {balanceOptions} from "../contracts/MoneyTreeCalculator";

export const HomePage = ({}) => {

    const history = useNavigate();
    const [id, setId] = useState('');
    const [balance, setBalance] = useState(0);
    const {authenticate, isAuthenticated, user, logout, Moralis} = useMoralis();

    useEffect(() => {
        if (isAuthenticated) {
            const cutId = user.getUsername().substring(0,6);
            setId(cutId)
        } else {
            setId('Connect ')
        }
    }, [isAuthenticated, balance])

    console.log(balance)


    return (
        <NewRootRoot>
                {/*<button onClick={async () => {*/}
                {/*    await Moralis.enableWeb3();*/}
                {/*    const answer = await Moralis.executeFunction(balanceOptions);*/}
                {/*    setBalance(answer)*/}
                {/*}}>{balance}</button>*/}
            <MoneyTree4>
                <Group1>
                    <Bgabovethefold
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/f0b70999-a9e2-464b-9b9f-f0916be87b5f.svg?alt=media&token=38d8a396-6271-459d-9f3b-7437799f27dd"
                        }
                    />
                    <Bgfeatures>
                        <Intersect
                            src={
                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/631d42c3-5301-4a6d-b5b6-901066546942.svg?alt=media&token=0f0338a5-604d-4f36-855b-f5d1762575c8"
                            }
                        />
                        <Group4>
                            <Intersect1
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/649b3fdd-bd19-4d73-8057-a693a41596ad.svg?alt=media&token=db6d828e-fd68-4abd-8434-0daba9c28438"
                                }
                            />
                            <Intersect2
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/0ee9eeb9-5ed3-4e9d-8b02-7beec9e6f57c.svg?alt=media&token=d27095a7-f0e3-4595-afe8-4f1bb4704805"
                                }
                            />
                        </Group4>
                    </Bgfeatures>
                    <Group6>
                        <FeatureTitle1>
                            <Subtitle2>
                                <_117>
                                    {"    "}
                                    <_11>1</_11>
                                    <_111>{"    "}</_111>
                                    <_112>≈</_112>
                                    <_111></_111>
                                    <_114>$</_114>
                                    <_115></_115>
                                    <_11>1</_11>
                                </_117>
                                <Group
                                    src={
                                        "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/6380ef1c-52fc-437d-83b6-ce1841a3223c.svg?alt=media&token=74af009e-80a5-48ff-b803-f746d9e602d3"
                                    }
                                />
                            </Subtitle2>
                            <Title5>
                                <ASimpleStrategyForMaintainingValueByCreatingUSDRWithSupplyEqualToMarketDemand>
                                    A simple strategy for maintaining value by creating USDR{"  "}
                                    with supply equal to market demand.
                                </ASimpleStrategyForMaintainingValueByCreatingUSDRWithSupplyEqualToMarketDemand>
                            </Title5>
                        </FeatureTitle1>
                        <Group5>
                            <HowToGetStarted1>
                                <TitleSubtitle>
                                    <Subtitle1>
                                        <HowToGetStarted>How To Get Started</HowToGetStarted>
                                    </Subtitle1>
                                    <Title1>
                                        <SimpleAndEasyWayToGetALoanOnMoneyTree>
                                            Simple and easy way to get a Loan <br/>
                                            on MoneyTree.
                                        </SimpleAndEasyWayToGetALoanOnMoneyTree>
                                    </Title1>
                                </TitleSubtitle>
                                <GetStartedButton>
                                    <Button1>Get Started</Button1>
                                </GetStartedButton>
                            </HowToGetStarted1>
                            <ContentItem3>
                                <ContentItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/3a494b38-8cf5-4496-a179-724cb1356e47.png?alt=media&token=c809a18c-153d-4ca7-9c37-819c8302a476"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Content3>
                                        <Title2>
                                            <CreateYourAccount>
                                                Connect{"  "}Your Wallet
                                            </CreateYourAccount>
                                        </Title2>
                                        <Description>
                                            <YourAccountAndPersonalIdentityAreGuaranteedSafe>
                                                Your account and cryptoassets are guaranteed safe.
                                            </YourAccountAndPersonalIdentityAreGuaranteedSafe>
                                        </Description>
                                    </Content3>
                                </ContentItem>
                                <ContentItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/66904b21-3cbb-4bcf-93c2-f406c45449e1.png?alt=media&token=b7cda4d5-2e59-4c96-9e80-071e6a10a712"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Content3>
                                        <Title2>
                                            <CreateYourAccount1>Get Your Loan</CreateYourAccount1>
                                        </Title2>
                                        <Description1>
                                            <YourAccountAndPersonalIdentityAreGuaranteedSafe1>
                                                Provide collaterale and get your loan with zero-interest
                                                .
                                            </YourAccountAndPersonalIdentityAreGuaranteedSafe1>
                                        </Description1>
                                    </Content3>
                                </ContentItem>
                                <ContentItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/406a966a-9462-4dbd-8ec6-48fdbc940547.png?alt=media&token=cac01e7c-0435-4b5c-bc1f-0c37397dad46"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Content3>
                                        <Title2>
                                            <CreateYourAccount1>
                                                Pay Back your Loan
                                            </CreateYourAccount1>
                                        </Title2>
                                        <Description1>
                                            <YourAccountAndPersonalIdentityAreGuaranteedSafe1>
                                                No due time for paying back the loans in MoneyTree.
                                            </YourAccountAndPersonalIdentityAreGuaranteedSafe1>
                                        </Description1>
                                    </Content3>
                                </ContentItem>
                            </ContentItem3>
                        </Group5>
                    </Group6>
                    <NewCrypto>
                        <ContentItem4
                            src={
                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/1951f9bd-afeb-4da1-828a-4acb2ab84747.svg?alt=media&token=38da5e9c-189a-49e0-bc09-e07ce946a7f9"
                            }
                        />
                        <NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt1>
                            New In Cryptocurrency?
                            <br/>
                            <NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt>
                                We'll tell you what USDR is , how it work and why you should own
                                one right now. So let's do it.
                            </NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt>
                        </NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt1>
                        <Button3>Learn & Explore Now</Button3>
                    </NewCrypto>
                    <Homepage>
                        <Landingtext>
                            <TheFutureOfStablecoins>
                                The future of Stablecoins
                            </TheFutureOfStablecoins>
                            <Group7>
                                <WhyComplicateThingsWhenTheyCanBeSimple3>
                                    Why Complicate Things When They Can Be
                                    <br/>
                                    <WhyComplicateThingsWhenTheyCanBeSimple>
                                        Simple
                                    </WhyComplicateThingsWhenTheyCanBeSimple>
                                    <WhyComplicateThingsWhenTheyCanBeSimple1>
                                        {" "}
                                    </WhyComplicateThingsWhenTheyCanBeSimple1>
                                    <WhyComplicateThingsWhenTheyCanBeSimple2>
                                        ?
                                    </WhyComplicateThingsWhenTheyCanBeSimple2>
                                </WhyComplicateThingsWhenTheyCanBeSimple3>
                                <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR5>
                                    MoneyTree is a decentralized bank built on Avalanche. It gives
                                    out
                                    <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR>
                                        {" "}
                                    </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR>
                                    <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR1>
                                        zero-interest
                                    </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR1>
                                    <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR2>
                                        {" "}
                                        loans for AVAX holders.
                                        <br/>
                                        The loans are paid out as stablecoins called{" "}
                                    </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR2>
                                    <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR1>
                                        USDR
                                    </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR1>
                                    <MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR4>
                                        .
                                    </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR4>
                                </MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR5>
                            </Group7>
                        </Landingtext>
                        <Button4>Use USDR</Button4>
                        <_2681Converted011
                            src={
                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c8f11f05-c48e-4e4b-ac36-5fee3048549e.svg?alt=media&token=ab21ebd7-7451-4ca2-bdce-1157d966aa01"
                            }
                        />
                    </Homepage>
                    <Header>
                        <MoneyTree3>
                            Money<MoneyTree2>Tree</MoneyTree2>
                        </MoneyTree3>
                        <NavItem>
                            <Home1 onClick={() => history('/')}>
                                <Home>Home</Home>
                                <Line3
                                    src={
                                        "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/ac5f5dc8-bc54-45a1-a94c-7d51cacffffd.svg?alt=media&token=75110392-c941-4550-9d56-edddd3f9e6dd"
                                    }
                                />
                            </Home1>
                            <Loan onClick={() => history('/loan')}>Loan</Loan>
                            <Dashboard onClick={() => history('/dashboard')}>Dashboard</Dashboard>
                        </NavItem>
                        <Group61>
                            <LoginButton>
                                <ConnectWallet/>
                                <Group3>
                                    <Group8>
                                        <Bxbxwallet
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e680a669-4307-4489-8445-212bf0bc6856.svg?alt=media&token=97a15441-9a89-46f8-a352-df741b276144"
                                            }
                                        />
                                        <_x0D02 onClick={() => authenticate({signingMessage: "Welcome to TreeMoney"})}>
                                            <_x0D01>{id}</_x0D01>
                                    </_x0D02>
                                </Group8>
                            </Group3>
                        </LoginButton>
                    </Group61>
                    <LanguageCTA>
                        <LangageOption>
                            <Jamworld
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bafb9c4a-e944-4cb9-8082-a09c65adf3f9.svg?alt=media&token=7a6cb8e9-76bf-49ab-ab5b-a153ecc17ea9"
                                }
                            />
                            <Frame3>
                                <EN>EN</EN>
                                <Bxbxchevrondown
                                    src={
                                        "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/080de4e3-d3e3-46a1-891c-3704314a4618.svg?alt=media&token=ff82fb48-d17d-49e9-8aee-79a462dbc67f"
                                    }
                                />
                            </Frame3>
                        </LangageOption>
                    </LanguageCTA>
                </Header>
            </Group1>
            <Group2>
                <Footer1>
                    <Footer>
                        <Rectangle27/>
                        <Group9>
                            <Frame152>
                                <Frame151>
                                    <Logo>
                                        <MoneyTree1>
                                            Money<MoneyTree2>Tree</MoneyTree2>
                                        </MoneyTree1>
                                    </Logo>
                                </Frame151>
                                <Frame150>
                                    <SocialMedia
                                        src={
                                            "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/09d5b777-eeab-4175-aed4-271cf8cd8801.svg?alt=media&token=93c1220f-51ab-42a1-b51b-456e9003910d"
                                        }
                                    />
                                    <_2021MoneyTreeAllRightsReserved>
                                        2021 MoneyTree. All rights reserved
                                    </_2021MoneyTreeAllRightsReserved>
                                </Frame150>
                            </Frame152>
                            <Frame149>
                                <AboutUsSection>
                                    <AboutUs>About Us</AboutUs>
                                    <AboutUsMenu>
                                        {["About", "Careers", "Blog", "Legal & privacy"].map(
                                            (text) => (
                                                <About>{text}</About>
                                            )
                                        )}
                                    </AboutUsMenu>
                                </AboutUsSection>
                                <AboutUsSection>
                                    <Getstartediconframe>
                                        <Services>Services</Services>
                                    </Getstartediconframe>
                                    <AboutUsMenu>
                                        <Aplications>Aplications</Aplications>
                                        <Aplications>Buy Crypto</Aplications>
                                        <Aplications>Affilliate</Aplications>
                                        <InstitutionalServices>
                                            Institutional Services
                                        </InstitutionalServices>
                                    </AboutUsMenu>
                                </AboutUsSection>
                                <AboutUsSection>
                                    <Getstartediconframe>
                                        <Learn>Learn</Learn>
                                    </Getstartediconframe>
                                    <AboutUsMenu>
                                        <WhatIsCryptocurency>
                                            What is Cryptocurency?
                                        </WhatIsCryptocurency>
                                        <CryptoBasic>Crypto Basic</CryptoBasic>
                                        <CryptoBasic>Tips and Tutorials</CryptoBasic>
                                        <CryptoBasic>Market Update</CryptoBasic>
                                    </AboutUsMenu>
                                </AboutUsSection>
                            </Frame149>
                        </Group9>
                    </Footer>
                </Footer1>
                <CryptoCapFeatures>
                    <FeatureTitle>
                        <Subtitle>
                            <WhyMoneyTreeWhenWeHaveMakerDAO>
                                Why MoneyTree when we have MakerDAO ?
                            </WhyMoneyTreeWhenWeHaveMakerDAO>
                        </Subtitle>
                        <Title5>
                            <ASimplestMostReliableKindOfMoneyOnTheAvalancheNetwork>
                                A simplest & most reliable kind of money on the Avalanche
                                network.
                            </ASimplestMostReliableKindOfMoneyOnTheAvalancheNetwork>
                        </Title5>
                    </FeatureTitle>
                    <CrytpCapFeatures>
                        <Feature1>
                            <Content>
                                <FeatureItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/617e4055-24e6-46ef-9599-1f1c8f347a52.png?alt=media&token=552d10ae-585b-448a-8d42-9d903e2219d3"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Frame109>
                                        <ManagePortfolio>Stability & Low Cost</ManagePortfolio>
                                        <BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                            Maintains a fixed value
                                            <br/>
                                            Has no fees & penalties <br/>
                                        </BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                    </Frame109>
                                </FeatureItem>
                                <Link1>
                                    <SeeExplained>See Explained</SeeExplained>
                                    <Frame22>
                                        <Rectangle6/>
                                        <Vector3
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/bb38af83-92a8-425f-a9a8-cc603a2de19f.svg?alt=media&token=647cf2a8-c6f0-4dff-8c0e-f16cc3f83335"
                                            }
                                        />
                                    </Frame22>
                                </Link1>
                            </Content>
                        </Feature1>
                        <Feature4>
                            <Content>
                                <FeatureItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/21f3a572-3daf-4499-88af-6ad387fea26b.png?alt=media&token=42b94e62-cfed-423b-90ae-8c355916a936"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Frame109>
                                        <ManagePortfolio>Reliability</ManagePortfolio>
                                        <BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                            Has lower default risk
                                            <br/>
                                            Requires higher collateral in high demands to secure the
                                            system
                                        </BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                    </Frame109>
                                </FeatureItem>
                                <Link1>
                                    <SeeExplained>See Explained</SeeExplained>
                                    <Frame22>
                                        <Rectangle6/>
                                        <Vector3
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/4d564ba4-5661-4780-b58b-d3103e43f348.svg?alt=media&token=d3b35f91-5f65-4208-8197-88ccb09384e9"
                                            }
                                        />
                                    </Frame22>
                                </Link1>
                            </Content>
                        </Feature4>
                        <Feature2>
                            <Content>
                                <FeatureItem>
                                    <Getstartediconframe>
                                        <Templategetstartedicon1
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/98ccf241-0377-45d3-afb6-36d6e96eccc7.png?alt=media&token=4b724a67-d321-43d5-89a2-0a62d04c6581"
                                            }
                                        />
                                    </Getstartediconframe>
                                    <Frame109>
                                        <ManagePortfolio>Simplicity & Security</ManagePortfolio>
                                        <BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                            Has hundreds lines of code
                                            <br/>
                                            Has an immutable Smart Contract
                                            <br/>
                                        </BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace>
                                    </Frame109>
                                </FeatureItem>
                                <Link1>
                                    <SeeExplained>See Explained</SeeExplained>
                                    <Frame22>
                                        <Rectangle6/>
                                        <Vector3
                                            src={
                                                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/aaf89c15-3a07-458c-b812-b180452b7204.svg?alt=media&token=d0fe1664-8f97-4455-ae69-0eb7f670754b"
                                            }
                                        />
                                    </Frame22>
                                </Link1>
                            </Content>
                        </Feature2>
                    </CrytpCapFeatures>
                </CryptoCapFeatures>
            </Group2>
        </MoneyTree4>
</NewRootRoot>
)
    ;
};
const _11 = styled.div`
  font-size: 36px;
  color: #ecf1f0;
  font-family: Roboto;
  font-weight: 700;
  line-height: 44px;
  display: contents;
`;
const _111 = styled.div`
  font-size: 36px;
  color: #c5c5c5;
  font-family: Roboto;
  font-weight: 700;
  line-height: 44px;
  display: contents;
  white-space: pre-wrap;
`;
const Title5 = styled.div`
  height: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6px;
  padding-right: 6px;
`;
const ContentItem = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 493.5px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 21px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  align-items: center;
  border-radius: 18px;
`;
const Getstartediconframe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Templategetstartedicon1 = styled.img`
  width: 80px;
  height: 80px;
`;
const Content3 = styled.div`
  height: 98px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title2 = styled.div`
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;
const CreateYourAccount1 = styled.div`
  color: #ecf1f0;
  width: 340.5px;
  font-size: 20px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 30px;
`;
const Description1 = styled.div`
  width: 360.5px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const YourAccountAndPersonalIdentityAreGuaranteedSafe1 = styled.div`
  color: #b5b5b5;
  width: 340.5px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
`;
const MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR1 = styled.div`
  font-size: 20px;
  color: #00ff99;
  font-family: Poppins;
  font-weight: 400;
  display: contents;
`;
const MoneyTree2 = styled.div`
  font-size: 24px;
  color: #00ff99;
  font-family: Raleway;
  font-weight: 700;
  display: contents;
`;
const AboutUsSection = styled.div`
  height: 198px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AboutUsMenu = styled.div`
  height: 156px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const About = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 137px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Aplications = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 149px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const CryptoBasic = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 168px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Content = styled.div`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const FeatureItem = styled.div`
  height: 221px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Frame109 = styled.div`
  height: 114px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ManagePortfolio = styled.div`
  color: #ecf1f0;
  width: 344.67px;
  font-size: 20px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 30px;
`;
const BuyAndSellPopularDigitalCurrenciesKeepTrackOfThemInTheOnePlace = styled.div`
  color: #b5b5b5;
  width: 344.67px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
`;
const Link1 = styled.div`
  width: 135px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SeeExplained = styled.div`
  color: #00ff99;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 24px;
`;
const Frame22 = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
  position: relative;
`;
const Rectangle6 = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 2.06px;
  left: 2.06px;
  border-radius: 20px;
`;
const Vector3 = styled.img`
  width: 8px;
  height: 10.5px;
  position: absolute;
  top: 8.31px;
  left: 17.31px;
`;
const NewRootRoot = styled.div`
  width: 1728px;
  height: 2831px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
const MoneyTree4 = styled.div`
  background-color: #11011e;
  height: 2831px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 21px;
  padding-right: 140px;
`;
const Group1 = styled.div`
  height: 1830px;
  width: 1588px;
  position: relative;
`;
const Bgabovethefold = styled.img`
  width: 1440px;
  height: 900px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Bgfeatures = styled.div`
  width: 1440px;
  position: absolute;
  top: 930px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 158.5px;
  padding-top: 156px;
  padding-bottom: 156px;
  align-items: center;
`;
const Intersect = styled.img`
  width: 375px;
  height: 545.5px;
  filter: blur(400px);
`;
const Group4 = styled.div`
  align-self: stretch;
  width: 888.83px;
  height: 588px;
  position: relative;
`;
const Intersect1 = styled.img`
  width: 620.33px;
  height: 474px;
  filter: blur(400px);
  position: absolute;
  top: 114px;
  left: 268.5px;
`;
const Intersect2 = styled.img`
  width: 375px;
  height: 545.5px;
  filter: blur(400px);
  position: absolute;
  top: 945px;
  left: 0;
`;
const Group6 = styled.div`
  width: 1258px;
  height: 626px;
  position: absolute;
  top: 1059px;
  left: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FeatureTitle1 = styled.div`
  height: 115px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Subtitle2 = styled.div`
  width: 1256px;
  height: 64px;
  position: relative;
`;
const _117 = styled.div`
  color: #c5c5c5;
  text-align: center;
  width: 1236px;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 44px;
  position: absolute;
  top: 10px;
  left: 10px;
  white-space: pre-wrap;
`;
const _112 = styled.div`
  font-size: 36px;
  color: #b5b5b5;
  font-family: Roboto;
  font-weight: 700;
  line-height: 44px;
  display: contents;
`;
const _114 = styled.div`
  font-size: 36px;
  color: #1e9f96;
  font-family: Roboto;
  font-weight: 700;
  line-height: 44px;
  display: contents;
`;
const _115 = styled.div`
  font-size: 36px;
  color: #1e9f96;
  font-family: Raleway;
  font-weight: 700;
  line-height: 44px;
  display: contents;
  white-space: pre-wrap;
`;
const Group = styled.img`
  width: 22.48px;
  height: 31.65px;
  position: absolute;
  top: 16px;
  left: 603px;
`;
const ASimpleStrategyForMaintainingValueByCreatingUSDRWithSupplyEqualToMarketDemand = styled.div`
  color: #b5b5b5;
  text-align: center;
  width: 1244px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 28.8px;
  white-space: pre-wrap;
`;
const Group5 = styled.div`
  width: 1257px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const HowToGetStarted1 = styled.div`
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TitleSubtitle = styled.div`
  height: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Subtitle1 = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`;
const HowToGetStarted = styled.div`
  color: #ecf1f0;
  width: 362px;
  font-size: 36px;
  font-family: Raleway;
  font-weight: 700;
  line-height: 44px;
`;
const Title1 = styled.div`
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`;
const SimpleAndEasyWayToGetALoanOnMoneyTree = styled.div`
  color: #b5b5b5;
  width: 362px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 28.8px;
`;
const GetStartedButton = styled.div`
  width: 372px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Button1 = styled.div`
  color: #e9e9e9;
  text-align: center;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 24px;
  background-color: #54216d;
  width: 190px;
  height: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 13px;
  padding-bottom: 13px;
  border-radius: 10px;
`;
const ContentItem3 = styled.div`
  height: 430px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CreateYourAccount = styled.div`
  color: #ecf1f0;
  width: 318px;
  font-size: 20px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-wrap;
`;
const Description = styled.div`
  width: 338px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const YourAccountAndPersonalIdentityAreGuaranteedSafe = styled.div`
  color: #b5b5b5;
  width: 318px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
`;
const NewCrypto = styled.div`
  width: 1259px;
  height: 142px;
  position: absolute;
  top: 807px;
  left: 240px;
`;
const ContentItem4 = styled.img`
  width: 1259px;
  height: 142px;
  position: absolute;
  top: 0;
  left: 0;
`;
const NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt1 = styled.div`
  color: #ecf1f0;
  width: 541.59px;
  height: 98.73px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 32px;
  position: absolute;
  top: 23.53px;
  left: 63.66px;
`;
const NewInCryptocurrencyWellTellYouWhatUSDRIsHowItWorkAndWhyYouShouldOwnOneRightNowSoLetsDoIt = styled.div`
  font-size: 18px;
  color: #ecf1f0;
  font-family: Roboto;
  font-weight: 400;
  line-height: 32px;
  display: contents;
`;
const Button3 = styled.div`
  color: #2a2a2a;
  text-align: center;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: -0.32px;
  background-color: #00ff99;
  width: 204.11px;
  height: 19px;
  overflow: hidden;
  position: absolute;
  top: 42.05px;
  left: 994.27px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 18.79px;
  padding-bottom: 18.79px;
  border-radius: 10px;
`;
const Homepage = styled.div`
  width: 1016px;
  height: 518px;
  position: absolute;
  top: 142px;
  left: 331px;
`;
const Landingtext = styled.div`
  height: 327px;
  position: absolute;
  top: 73px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const TheFutureOfStablecoins = styled.div`
  color: #bdbdbd;
  width: 230px;
  height: 20px;
  font-size: 13px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 16.9px;
`;
const Group7 = styled.div`
  align-self: stretch;
  height: 302px;
  width: 660px;
  position: relative;
`;
const WhyComplicateThingsWhenTheyCanBeSimple3 = styled.div`
  color: #f5f5f5;
  width: 660px;
  height: 230px;
  font-size: 50px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 65px;
  position: absolute;
  top: 0;
  left: 0;
`;
const WhyComplicateThingsWhenTheyCanBeSimple = styled.div`
  font-size: 52px;
  color: #00ff99;
  font-family: Poppins;
  font-weight: 600;
  line-height: 67.6px;
  display: contents;
`;
const WhyComplicateThingsWhenTheyCanBeSimple1 = styled.div`
  font-size: 50px;
  color: #0fae95;
  font-family: Poppins;
  font-weight: 600;
  line-height: 65px;
  display: contents;
  white-space: pre-wrap;
`;
const WhyComplicateThingsWhenTheyCanBeSimple2 = styled.div`
  font-size: 50px;
  color: #f5f5f5;
  font-family: Poppins;
  font-weight: 600;
  line-height: 65px;
  display: contents;
`;
const MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR5 = styled.div`
  color: #dfdfdf;
  width: 500px;
  height: 92px;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 400;
  position: absolute;
  top: 210px;
  left: 0;
`;
const MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR = styled.div`
  font-size: 19px;
  color: #0fae95;
  font-family: Poppins;
  font-weight: 400;
  display: contents;
  white-space: pre-wrap;
`;
const MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR2 = styled.div`
  font-size: 18px;
  color: #dfdfdf;
  font-family: Poppins;
  font-weight: 400;
  display: contents;
  white-space: pre-wrap;
`;
const MoneyTreeIsADecentralizedBankBuiltOnAvalancheItGivesOutZerointerestLoansForAVAXHoldersTheLoansArePaidOutAsStablecoinsCalledUSDR4 = styled.div`
  font-size: 18px;
  color: #dfdfdf;
  font-family: Poppins;
  font-weight: 400;
  display: contents;
`;
const Button4 = styled.div`
  color: #11011e;
  text-align: center;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: -0.32px;
  background-color: #00ff99;
  width: 190px;
  height: 19px;
  overflow: hidden;
  position: absolute;
  top: 426px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;
`;
const _2681Converted011 = styled.img`
  width: 724px;
  height: 518px;
  position: absolute;
  top: 0;
  left: 292px;
`;
const Header = styled.div`
  width: 1200px;
  position: absolute;
  top: 28px;
  left: 269px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const MoneyTree3 = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 700;
  width: 138px;
  height: 28px;
  margin-top: 3px;
  margin-right: 336px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 1px;
  padding-bottom: 1px;
`;
const NavItem = styled.div`
  width: 286px;
  overflow: hidden;
  margin-right: 157px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Home1 = styled.div`
  height: 24px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 9px;
  padding-bottom: 6px;
  padding-left: 9px;
  padding-right: 8px;
  align-items: center;
`;
const Home = styled.div`
  color: #00ff99;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
`;
const Line3 = styled.img`
  width: 55px;
  height: 3px;
  align-self: stretch;
`;
const Loan = styled.div`
  color: #ecf1f0;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 500;
  width: 62px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 9px;
  padding-bottom: 9px;
`;
const Dashboard = styled.div`
  color: #ecf1f0;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 500;
  width: 112px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 9px;
  padding-bottom: 9px;
`;
const Group61 = styled.div`
  margin-right: 21px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;
const LoginButton = styled.div`
  background-color: #00ff99;
  width: 182px;
  height: 45px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
`;
const ConnectWallet = styled.div`
  color: #2a2a2a;
  text-align: center;
  position: absolute;
  top: 10.5px;
  left: 91px;
`;
const Group3 = styled.div`
  height: 31px;
  position: absolute;
  top: 8px;
  left: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 13px;
`;
const Group8 = styled.div`
  height: 29px;
  width: 124px;
  position: relative;
`;
const Bxbxwallet = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 113px;
`;
const _x0D02 = styled.div`
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: -0.48px;
  position: absolute;
  top: 1px;
  left: 0;
`;
const _x0D0 = styled.div`
  font-size: 20px;
  color: #000000;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: -0.4px;
  display: contents;
`;
const _x0D01 = styled.div`
  font-size: 24px;
  color: #000000;
  font-family: Raleway;
  font-weight: 600;
  letter-spacing: -0.48px;
  display: contents;
`;
const LanguageCTA = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LangageOption = styled.div`
  width: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Jamworld = styled.img`
  width: 24px;
  height: 24px;
`;
const Frame3 = styled.div`
  width: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const EN = styled.div`
  color: #b5b5b5;
  text-align: center;
  width: 23px;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 600;
`;
const Bxbxchevrondown = styled.img`
  width: 23px;
  height: 24px;
  align-self: stretch;
`;
const Group2 = styled.div`
  height: 527px;
  width: 1588px;
  position: relative;
`;
const Footer1 = styled.div`
  position: absolute;
  top: 687px;
  left: 148px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Footer = styled.div`
  height: 297px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 48.5px;
  padding-right: 1px;
`;
const Rectangle27 = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  width: 1439px;
  height: 1px;
`;
const Group9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 90px;
  padding-right: 90px;
  align-items: center;
`;
const Frame152 = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Frame151 = styled.div`
  width: 256px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Logo = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MoneyTree1 = styled.div`
  color: #ecf1f0;
  width: 133px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 700;
`;
const Frame150 = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const SocialMedia = styled.img`
  width: 132px;
  height: 24px;
`;
const _2021MoneyTreeAllRightsReserved = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 256px;
  height: 24px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Frame149 = styled.div`
  width: 732px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AboutUs = styled.div`
  color: #00ff99;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 22px;
  width: 137px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Services = styled.div`
  color: #00ff99;
  width: 149px;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 22px;
`;
const InstitutionalServices = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 149px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Learn = styled.div`
  color: #00ff99;
  width: 168px;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 22px;
`;
const WhatIsCryptocurency = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  width: 168px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CryptoCapFeatures = styled.div`
  height: 527px;
  position: absolute;
  top: 0;
  left: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FeatureTitle = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Subtitle = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;
const WhyMoneyTreeWhenWeHaveMakerDAO = styled.div`
  color: #ecf1f0;
  text-align: center;
  width: 1236px;
  font-size: 36px;
  font-family: Raleway;
  font-weight: 700;
  line-height: 44px;
`;
const ASimplestMostReliableKindOfMoneyOnTheAvalancheNetwork = styled.div`
  color: #b5b5b5;
  text-align: center;
  width: 1244px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 28.8px;
`;
const CrytpCapFeatures = styled.div`
  width: 1256px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Feature1 = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  backdrop-filter: blur(200px);
  height: 343px;
  overflow: hidden;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 28px;
  padding-right: 30px;
  border-radius: 18px;
`;
const Feature4 = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  height: 343px;
  overflow: hidden;
  margin-right: 23.99px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 28px;
  padding-right: 30px;
  border-radius: 18px;
`;
const Feature2 = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  height: 343px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 28px;
  padding-right: 30px;
  border-radius: 18px;
`;
