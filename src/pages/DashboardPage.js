import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const DashboardPage = ({}) => {

  const history = useNavigate();
  return (
    <NewRootRoot>
      <Page3>
        <Header>
          <MoneyTree3>
            Money<MoneyTree2>Tree</MoneyTree2>
          </MoneyTree3>
          <Group2>
            <NavItem>
              <Home onClick={() => history('/')}>Home</Home>
              <Loan onClick={() => history('/loan')}>Loan</Loan>
              <Dashboard onClick={() => history('/dashboard')}>Dashboard</Dashboard>
            </NavItem>
            <Line3
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/f0f39dba-5335-4749-96d8-7d7c8442148f.svg?alt=media&token=d9193d37-634d-49ce-b8ae-54f6e6347da6"
              }
            />
          </Group2>
          <Group4>
            <LanguageCTA>
              <LangageOption>
                <Jamworld
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e6bcb73b-a578-41a2-8de9-489b0a85ab2b.svg?alt=media&token=df44c547-fcc1-451d-ad1c-9b9181ac5715"
                  }
                />
                <Frame3>
                  <EN>EN</EN>
                  <Bxbxchevrondown
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/6b4dc56c-9cff-4771-8a00-e8c737c17db6.svg?alt=media&token=1457c9e4-ec20-4125-ad96-2899256b0a1b"
                    }
                  />
                </Frame3>
              </LangageOption>
            </LanguageCTA>
            <Group6>
              <LoginButton>
                <ConnectWallet />
                <Group3>
                  <Group5>
                    <Bxbxwallet
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/40fa5c4b-c368-4cf4-a255-0464b4e63297.svg?alt=media&token=a434874e-26d2-447e-9a6b-3fed72bd1079"
                      }
                    />
                    <_x0D02>
                      0x0<_x0D0>D</_x0D0>
                      <_x0D01>0****</_x0D01>
                    </_x0D02>
                  </Group5>
                </Group3>
              </LoginButton>
            </Group6>
          </Group4>
        </Header>
        <MarketTrend1>
          <MarketTrendTitle>
            <MarketTrend>Market Trend</MarketTrend>
          </MarketTrendTitle>
          <Divider3 />
          <Group7>
            <CoinTrendItem>
              <Group9>
                <CoinInfo>
                  <Frame106>
                    <Ellipse1 />
                    <BTC>AVAX</BTC>
                    <BITCOIN>Avalanche</BITCOIN>
                  </Frame106>
                  <Seemoreic>
                    <Rectangle6>
                      <Vector3
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/05643b77-8b9e-46e0-a6f5-1e59177115e5.svg?alt=media&token=83a67f76-9cd9-4f65-bc3f-cee046020d61"
                        }
                      />
                    </Rectangle6>
                  </Seemoreic>
                </CoinInfo>
                <Vector
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/08a78a55-e61d-48aa-a09e-ac7aa020f4c6.svg?alt=media&token=8b8a61b0-4a0f-4efe-b08c-df9b1c414e18"
                  }
                />
              </Group9>
              <Divider1 />
              <CoinValue>
                <Frame108>
                  <_56623542>$587.74</_56623542>
                  <_141>0.82%</_141>
                </Frame108>
                <Chartstate1
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/a7cb3879-005a-4e95-8cbd-4e03f6e6bbb7.png?alt=media&token=a1601dba-adde-44bd-aa5d-e52580a77cd8"
                  }
                />
              </CoinValue>
            </CoinTrendItem>
            <Group8>
              <Ellipse15
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c19bf43a-1a3a-4381-85c7-abef55d862f8.svg?alt=media&token=93d308a4-9f72-4752-94ca-4bdc7bacdc51"
                }
              />
              <TotalSupply>Total Supply</TotalSupply>
              <USDR>USDR</USDR>
              <_>--</_>
            </Group8>
            <CoinTrendItem1>
              <Group9>
                <CoinInfo>
                  <Frame1061>
                    <Ellipse1 />
                    <BTC>USDR</BTC>
                    <BITCOIN1>MoneyTree</BITCOIN1>
                  </Frame1061>
                  <Seemoreic>
                    <Rectangle6>
                      <Vector3
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/4c7acd60-41cc-4923-9335-3f88737caa63.svg?alt=media&token=17075c10-2768-4b2e-a308-a54ada13157d"
                        }
                      />
                    </Rectangle6>
                  </Seemoreic>
                </CoinInfo>
                <Group
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/9a75d8ef-943b-4eb8-b881-fe429dd4a5b2.svg?alt=media&token=6243e070-260f-41ba-a5fe-bc1a6fafd714"
                  }
                />
              </Group9>
              <Divider1 />
              <CoinValue>
                <Frame108>
                  <_56623542>$1.01</_56623542>
                  <_141>0.02%</_141>
                </Frame108>
                <Chartstate1
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/0a8b4cc8-4731-41b9-a307-a9981b5473bf.png?alt=media&token=8b07d385-f5fe-44b0-a9bc-d608a9ea444c"
                  }
                />
              </CoinValue>
            </CoinTrendItem1>
          </Group7>
        </MarketTrend1>
        <Group1>
          <Bg
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/75aeb4a5-7511-4d1b-898a-8297588d2d01.svg?alt=media&token=24624212-5b9e-42f7-b5f3-92f7c0558b9f"
            }
          />
          <Footer1>
            <Footer>
              <Rectangle27 />
              <Group11>
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
                        "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7f178bd3-291f-4cf2-acf2-b47a2eb8ffdd.svg?alt=media&token=a442c2c5-a517-4640-b1b6-feb324124099"
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
                    <ServicesTitle>
                      <Services>Services</Services>
                    </ServicesTitle>
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
                    <ServicesTitle>
                      <Learn>Learn</Learn>
                    </ServicesTitle>
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
              </Group11>
            </Footer>
          </Footer1>
          <LoanHistory1>
            <Divider />
            <LoanHistory>Loan History</LoanHistory>
            <TableCrypto>
              <TableHeader>
                <Frame33>
                  <NO>Loan ID</NO>
                  <NAME1>Collateralization Ratio</NAME1>
                </Frame33>
                <Frame34>
                  <LASTPRICE>Minimum Ratio</LASTPRICE>
                  <CHANGE>Liquidation Price (AVAX/USD)</CHANGE>
                  <MARKETSTATS>Loan State</MARKETSTATS>
                  <TRADE>ACTION</TRADE>
                </Frame34>
              </TableHeader>
              <Group12>
                <Rectangle28 />
                <Rectangle281 />
                <Rectangle282 />
                <Rectangle283 />
                <Rectangle284 />
                <Rectangle285 />
                <Action>
                  <Frame44>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame44>
                  <Frame45>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame45>
                  <Frame48>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame48>
                  <Frame47>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame47>
                  <Frame46>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame46>
                  <Frame49>
                    <Button1 onClick={() => history('/loan-manager')}>Manage</Button1>
                  </Frame49>
                </Action>
                <Status1>
                  <Active>Active</Active>
                  <Innactive>Innactive</Innactive>
                  <Innactive1>Innactive</Innactive1>
                  <Active1>Active</Active1>
                  <Active2>Active</Active2>
                  <Innactive2>Innactive</Innactive2>
                </Status1>
                <Price>
                  <_56623541>
                    $<_5662354>56,623.54</_5662354>
                  </_56623541>
                  <_5003541>
                    $<_5662354>5003.54</_5662354>
                  </_5003541>
                  <_56623541>
                    $<_5662354>53.54</_5662354>
                  </_56623541>
                  <_56623541>
                    $<_5662354>5023.54</_5662354>
                  </_56623541>
                  <_5003541>
                    $<_5662354>6,623.54</_5662354>
                  </_5003541>
                  <_503541>
                    $<_5662354>503.54</_5662354>
                  </_503541>
                </Price>
                <Ratio2>
                  <_12>
                    1<_11>%</_11>
                  </_12>
                  <_201>
                    20<_11>%</_11>
                  </_201>
                  <_12>
                    20<_11>%</_11>
                  </_12>
                  <_201>
                    11<_11>%</_11>
                  </_201>
                  <_12>
                    13<_11>%</_11>
                  </_12>
                  <_271>
                    27<_11>%</_11>
                  </_271>
                </Ratio2>
                <Ratio1>
                  <_32>
                    3<_11>%</_11>
                  </_32>
                  <_151>
                    15<_11>%</_11>
                  </_151>
                  <_221>
                    22<_11>%</_11>
                  </_221>
                  <_131>
                    13<_11>%</_11>
                  </_131>
                  <_221>
                    17<_11>%</_11>
                  </_221>
                  <_223>
                    22<_11>%</_11>
                  </_223>
                </Ratio1>
                <Ids>
                  <_1>01</_1>
                  <_2>02</_2>
                  <_1>03</_1>
                  <_4>04</_4>
                  <_2>05</_2>
                  <_6>06</_6>
                </Ids>
              </Group12>
            </TableCrypto>
            <Rectangle29 />
          </LoanHistory1>
        </Group1>
      </Page3>
    </NewRootRoot>
  );
};
const MoneyTree2 = styled.div`
  font-size: 24px;
  color: #00ff99;
  font-family: Raleway;
  font-weight: 700;
  display: contents;
`;
const Group9 = styled.div`
  height: 50px;
  width: 258px;
  position: relative;
`;
const CoinInfo = styled.div`
  width: 254px;
  position: absolute;
  top: 0;
  left: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Ellipse1 = styled.div`
  width: 50px;
  height: 50px;
  align-self: stretch;
`;
const BTC = styled.div`
  color: #ecf1f0;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
`;
const Seemoreic = styled.div`
  height: 48px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7px;
  padding-right: 7px;
`;
const Rectangle6 = styled.div`
  background-color: #2c223b;
  width: 31.58px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0;
  padding-left: 1.21px;
  padding-right: 1.21px;
  padding-top: 4.84px;
  padding-bottom: 10.1px;
  border-radius: 20px;
`;
const Vector3 = styled.img`
  width: 14px;
  height: 19.06px;
`;
const Divider1 = styled.div`
  background-color: rgba(236, 241, 240, 0.15);
  width: 258px;
  height: 1px;
`;
const CoinValue = styled.div`
  width: 252px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Frame108 = styled.div`
  height: 66px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _56623542 = styled.div`
  color: #ecf1f0;
  width: 140px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 500;
`;
const _141 = styled.div`
  color: #b5b5b5;
  width: 140px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 28.8px;
`;
const Chartstate1 = styled.img`
  width: 100px;
  height: 53.27px;
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
const ServicesTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Button1 = styled.div`
  z-index: 100;
  pointer-events:none;
  cursor: pointer;
  color: #2a2a2a;
  text-align: center;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 24px;
  background-color: #00ff99;
  width: 109px;
  height: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 10px;
`;
const _56623541 = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 42.74px;
`;
const _5662354 = styled.div`
  font-size: 16px;
  color: #b5b5b5;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  display: contents;
`;
const _5003541 = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 42.75px;
`;
const _12 = styled.div`
  color: #b5b5b5;
  width: 42px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.02px;
`;
const _11 = styled.div`
  font-size: 16px;
  color: #00ff99;
  font-family: Roboto;
  font-weight: 400;
  display: contents;
`;
const _201 = styled.div`
  color: #b5b5b5;
  width: 42px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.03px;
`;
const _221 = styled.div`
  color: #b5b5b5;
  width: 32.47px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.02px;
`;
const _1 = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 41px;
`;
const _2 = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 43px;
`;
const NewRootRoot = styled.div`
  width: 1728px;
  height: 1724px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
const Page3 = styled.div`
  background-color: #11011e;
  height: 1724px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 144px;
  padding-right: 144px;
  align-items: center;
`;
const Header = styled.div`
  width: 1262px;
  margin-right: 58px;
  margin-bottom: 127px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MoneyTree3 = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 700;
  width: 129px;
  height: 30px;
  margin-top: 6px;
  margin-right: 328px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Group2 = styled.div`
  margin-right: 174px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2px;
  padding-bottom: 2px;
  align-items: flex-end;
`;
const NavItem = styled.div`
  width: 286px;
  overflow: hidden;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Home = styled.div`
  color: #ecf1f0;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  width: 72px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 9px;
  padding-bottom: 9px;
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
  color: #00ff99;
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
const Line3 = styled.img`
  width: 92px;
  height: 3px;
  margin-right: 10px;
`;
const Group4 = styled.div`
  width: 345px;
  height: 45px;
  position: relative;
`;
const LanguageCTA = styled.div`
  width: 205px;
  position: absolute;
  top: 9px;
  left: 140px;
  display: flex;
  flex-direction: row;
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
const Group6 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
const Group5 = styled.div`
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
const MarketTrend1 = styled.div`
  height: 267px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MarketTrendTitle = styled.div`
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MarketTrend = styled.div`
  color: #ecf1f0;
  text-align: center;
  width: 1260px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 600;
  line-height: 32px;
`;
const Divider3 = styled.div`
  background-color: #ecf1f0;
  width: 250px;
  height: 2.5px;
  margin-bottom: 34.5px;
  align-self: center;
`;
const Group7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CoinTrendItem = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  height: 187px;
  overflow: hidden;
  margin-right: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
  padding-left: 90.5px;
  padding-right: 91.5px;
  border-radius: 18px;
`;
const Frame106 = styled.div`
  width: 186px;
  overflow: hidden;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BITCOIN = styled.div`
  color: #000000;
  text-align: center;
  font-size: 10px;
  font-family: Raleway;
  font-weight: 600;
  background-color: #b5b5b5;
  width: 62px;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
`;
const Vector = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 1.5px;
`;
const Group8 = styled.div`
  width: 187px;
  margin-right: 67px;
  height: 187px;
  position: relative;
`;
const Ellipse15 = styled.img`
  width: 187px;
  height: 187px;
  position: absolute;
  top: 0;
  left: 0;
`;
const TotalSupply = styled.div`
  color: #c5c5c5;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  position: absolute;
  top: 42px;
  left: 41px;
`;
const USDR = styled.div`
  color: #c5c5c5;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  position: absolute;
  top: 137px;
  left: 69px;
`;
const _ = styled.div`
  color: #00ff99;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 600;
  position: absolute;
  top: 86px;
  left: 86px;
`;
const CoinTrendItem1 = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  height: 187px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
  padding-left: 90.5px;
  padding-right: 91.5px;
  border-radius: 18px;
`;
const Frame1061 = styled.div`
  width: 193px;
  overflow: hidden;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const BITCOIN1 = styled.div`
  color: #000000;
  text-align: center;
  font-size: 10px;
  font-family: Raleway;
  font-weight: 600;
  background-color: #b5b5b5;
  width: 65px;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
`;
const Group = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0.5px;
`;
const Group1 = styled.div`
  align-self: stretch;
  height: 1117px;
  width: 1440px;
  position: relative;
`;
const Bg = styled.img`
  width: 1440px;
  height: 900px;
  position: absolute;
  top: 17px;
  left: 0;
`;
const Footer1 = styled.div`
  position: absolute;
  top: 820px;
  left: 0;
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
  background-color: rgba(255, 255, 255, 0.1);
  width: 1439px;
  height: 1px;
`;
const Group11 = styled.div`
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
const LoanHistory1 = styled.div`
  width: 1317px;
  height: 625px;
  position: absolute;
  top: 0;
  left: 62px;
`;
const Divider = styled.div`
  background-color: rgba(236, 241, 240, 0.15);
  width: 250px;
  height: 2.5px;
  position: absolute;
  top: 80px;
  left: 533px;
`;
const LoanHistory = styled.div`
  color: #00ff99;
  text-align: center;
  width: 182px;
  height: 22px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 700;
  position: absolute;
  top: 35px;
  left: 567px;
`;
const TableCrypto = styled.div`
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.15);
  border-style: solid;
  height: 434.38px;
  position: absolute;
  top: 106px;
  left: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 18px;
`;
const TableHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 1201px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 114px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 21.69px;
  padding-bottom: 21.69px;
`;
const Frame33 = styled.div`
  width: 273px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NO = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  width: 65px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const NAME1 = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  width: 168px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Frame34 = styled.div`
  width: 770px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LASTPRICE = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  width: 120px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const CHANGE = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 700;
  width: 225px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const MARKETSTATS = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  width: 87px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const TRADE = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  width: 68px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
`;
const Group12 = styled.div`
  height: 372px;
  width: 1261px;
  position: relative;
`;
const Rectangle28 = styled.div`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Rectangle281 = styled.div`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 62px;
  left: 0;
`;
const Rectangle282 = styled.div`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 124px;
  left: 0;
`;
const Rectangle283 = styled.div`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 186px;
  left: 0;
`;
const Rectangle284 = styled.div`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 248px;
  left: 0;
`;
const Rectangle285 = styled.div`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: solid;
  width: 1261px;
  height: 62px;
  position: absolute;
  top: 310px;
  left: 0;
`;
const Action = styled.div`
  height: 327px;
  position: absolute;
  top: 23.62px;
  left: 1096px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Frame44 = styled.div`
  pointer-events:none;
  cursor: pointer;
  width: 120px;
  overflow: hidden;
  margin-bottom: 22.88px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Frame45 = styled.div`
  width: 120px;
  overflow: hidden;
  margin-bottom: 27.65px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Frame48 = styled.div`
  width: 120px;
  overflow: hidden;
  margin-bottom: 30.51px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Frame47 = styled.div`
  width: 120px;
  overflow: hidden;
  margin-bottom: 23.83px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Frame46 = styled.div`
  width: 120px;
  overflow: hidden;
  margin-bottom: 16.21px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Frame49 = styled.div`
  width: 120px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0;
  padding-top: 2px;
  padding-bottom: 0.32px;
`;
const Status1 = styled.div`
  height: 326.88px;
  position: absolute;
  top: 23.62px;
  left: 953px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Active = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 41.12px;
`;
const Innactive = styled.div`
  color: #c10404;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 44.12px;
`;
const Innactive1 = styled.div`
  color: #c10404;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 43.12px;
`;
const Active1 = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 42.12px;
`;
const Active2 = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 43.12px;
`;
const Innactive2 = styled.div`
  color: #c10404;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
`;
const Price = styled.div`
  height: 327px;
  position: absolute;
  top: 23.62px;
  left: 683px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const _503541 = styled.div`
  color: #00ff99;
  width: 119px;
  height: 18.88px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
`;
const Ratio2 = styled.div`
  height: 327px;
  position: absolute;
  top: 23.62px;
  left: 456px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const _271 = styled.div`
  color: #b5b5b5;
  width: 42px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
`;
const Ratio1 = styled.div`
  height: 327px;
  position: absolute;
  top: 23.62px;
  left: 194px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const _32 = styled.div`
  color: #b5b5b5;
  width: 32.47px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.52px;
`;
const _151 = styled.div`
  color: #b5b5b5;
  width: 48px;
  height: 19px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.01px;
  align-self: stretch;
`;
const _131 = styled.div`
  color: #b5b5b5;
  width: 32.47px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 42.03px;
`;
const _223 = styled.div`
  color: #b5b5b5;
  width: 32.47px;
  height: 19.48px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
`;
const Ids = styled.div`
  height: 327px;
  position: absolute;
  top: 23.62px;
  left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const _4 = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 45px;
`;
const _6 = styled.div`
  color: #b5b5b5;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
`;
const Rectangle29 = styled.div`
  background-color: rgba(255, 255, 255, 0.02);
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.02);
  border-style: solid;
  width: 1317px;
  height: 625px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 18px;
`;
