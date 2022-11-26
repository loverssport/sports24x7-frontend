import {React, useEffect, useState} from 'react'
import "./news.css"

const News = () => {
    const [articles,setArticles]=useState([])

    const data = [{
        "status": "ok",
        "totalResults": 70,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "Virat Kohli's Twitter and Instagram posts spark Dhoni-like retirement rumours - Hindustan Times",
                "description": "Kohli's post on Saturday took the fans back to the memorable India vs Pakistan match played in front of more than 90 thousand spectators at the MCG but it also gave a scare to a section of them. The former India captain's framing of words made fans wonder whe…",
                "url": "https://www.hindustantimes.com/cricket/virat-kohli-s-twitter-and-instagram-posts-sparks-ms-dhoni-like-retirement-rumours-101669443859055.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/11/26/1600x900/CRICKET-WC-2022-T20-IND-ENG-127_1669443916219_1669443916219_1669443930068_1669443930068.jpg",
                "publishedAt": "2022-11-26T06:35:26Z",
                "content": "Virat Kohli's latest cross-platform social media post on Saturday left the fans scratching their heads, sparking retirement rumours. Kohli, who is currently enjoying a break from cricket along with t… [+2191 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cricketcountry.com"
                },
                "author": "CricketCountry Staff",
                "title": "India vs Australia Hockey Test Series, Adelaide Match 1 Highlights: AUS Beat IND 5-4 In A Nailbiter - Cricket Country News",
                "description": "India vs Australia Hockey Test Series, Adelaide Match 1 Highlights: Australia beat India in a thrilling game to take a 1-0 lead in the five match series.",
                "url": "https://www.cricketcountry.com/news/live-score-ind-vs-aus-hockey-test-series-match-2022-today-india-vs-australia-mate-stadium-adelaide-live-streaming-hotstar-harmanpreet-singh-manpreet-singh-akashdeep-1054550",
                "urlToImage": "https://www.cricketcountry.com/wp-content/uploads/2022/11/IND-vs-AUS-Hockey-Test-Series-2022.jpg",
                "publishedAt": "2022-11-26T06:25:57Z",
                "content": "IND vs AUS Hockey Test Series 2022 (Image Source: Twitter)\r\n India vs Australia Hockey Test Series, Adelaide Highlights: Harmanpreet-Singh-led India will face Australia in a five match Test series at… [+7248 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Crictracker.com"
                },
                "author": "CricTracker Staff",
                "title": "WBBL 2022: Final, SS-W vs AS-W Match Prediction – Who will win today's match between SS-W vs AS-W? - CricTracker",
                "description": "Two-time champions Sydney Sixers will take on Adelaide Strikers in the summit clash of the eighth edition of the Women’s Big Bash League at the North Sydney Oval Stadium on Saturday, November 26.&nbsp",
                "url": "https://www.crictracker.com/cricket-match-predictions/wbbl-2022-final-ss-w-vs-as-w-match-prediction-who-will-win-todays-wbbl-match-between-ss-w-vs-as-w/",
                "urlToImage": "https://media.crictracker.com/media/attachments/1665820015870_Sydney-sixers.jpeg",
                "publishedAt": "2022-11-26T06:15:00Z",
                "content": "Two-time champions Sydney Sixers will take on Adelaide Strikers in the summit clash of the eighth edition of the Womens Big Bash League at the North Sydney Oval Stadium on Saturday, November 26. \r\nSy… [+3763 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "NDTV Sports Desk",
                "title": "\"Illegal In The World, But Not In Pakistan\": Wasim Akram On His Rehab Experience - NDTV Sports",
                "description": "Wasim Akram has revealed that he was kept in a rehab in Pakistan for two-and-a-half months against his will. He also said that keeping someone against their will is \"illegal in the world, but not in Pakistan\".",
                "url": "https://sports.ndtv.com/cricket/illegal-in-the-world-but-not-in-pakistan-wasim-akram-on-his-rehab-experience-3554953",
                "urlToImage": "https://c.ndtvimg.com/2022-10/56llhvlc_wasim-akram_640x480_30_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-11-26T06:09:09Z",
                "content": "Former Pakistan captain and bowling legend, Wasim Akram opened up on his cocaine addiction in his autobiography -- Sultan A Memoir. The former left-arm seamer has been promoting his book, and in a re… [+2340 chars]"
            },
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Hamza Mohamed",
                "title": "Nine of 11 Saudi starters play for same club. Who are Al Hilal? - Al Jazeera English",
                "description": "The Riyadh-based club.is the kingdom’s most successful football team.",
                "url": "https://www.aljazeera.com/sports/2022/11/26/al-hilal-the-engine-of-the-saudi-arabias-world-cup-team",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/2021-11-23T222946Z_1439116608_UP1EHBN1G9J7E_RTRMADP_3_SOCCER-AFCCHAMPIONS-ALH-POH.jpg?resize=1920%2C1440",
                "publishedAt": "2022-11-26T05:15:28Z",
                "content": "Doha, Qatar As the announcer blared one after another the names of the Saudi players to loud cheers inside Lusail stadium a distinctive pattern emerged.\r\nOf the 11 players lined up on Tuesday up to p… [+3600 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "AAP",
                "title": "'It is not true' - Langer adamant no cricket rift exists - ESPNcricinfo",
                "description": "A recent podcast released last week reignited tensions about the former coach's departure",
                "url": "https://www.espncricinfo.com/story/australia-news-it-is-not-true-justin-langer-adamant-no-cricket-rift-exists-1346528",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/315100/315157.6.jpg",
                "publishedAt": "2022-11-26T05:05:02Z",
                "content": "'I try and be myself, I can't be him' - meet Tagenarine Chanderpaul"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "NDTV Sports Desk",
                "title": "Watch: Washington Sundar Stuns Cricket Fanatics With Exquisite Scoop Shot Off Matt Henry In 1st ODI - NDTV Sports",
                "description": "Washington Sundar scored an outrageous scoop shot in the first ODI of the 3-match series against New Zealand. The video has gone viral on social media.",
                "url": "https://sports.ndtv.com/new-zealand-vs-india-2022-23/watch-washington-sundar-stuns-cricket-fanatics-with-exquisite-scoop-shot-off-matt-henry-in-1st-odi-3553250",
                "urlToImage": "https://c.ndtvimg.com/2022-11/r97e6dtg_washington-sundar-scoop_625x300_25_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-11-26T04:49:17Z",
                "content": "India all-rounder Washington Sundar produced a fine cameo with the bat in the first ODI against New Zealand. Into the Indain team after a lengthy absence, Sundar proved why he deserves to be a consis… [+1905 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "Aadam Patel",
                "title": "Imad Wasim brings out the late blows as the Bulls-Abu Dhabi T10 game ends in a tie - ESPNcricinfo",
                "description": "Nicholas Pooran continues his impeccable form, Carlos Braithwaite's all-round efforts get Chennai Braves on the board",
                "url": "https://www.espncricinfo.com/story/abu-dhabi-t10-wasim-brings-out-the-late-blows-as-the-bulls-abu-dhabi-game-ends-in-a-tie-1346533",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349700/349762.6.jpg",
                "publishedAt": "2022-11-26T04:19:16Z",
                "content": "FeatureNicholas Pooran continues his impeccable form, Carlos Braithwaite's all-round efforts get Chennai Braves on the board\r\nKeemo Paul and Imad Wasim made important contributions for Delhi Bulls  •… [+3908 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Muslim Body Weighs In On FIFA World Cup Craze In Kerala, Calls It 'Un-Islamic' - NDTV",
                "description": "A Muslim body in Kerala on Friday came out against soccer-crazy youth in the state, who have erected cutouts of star-players in support of their teams participating in the ongoing World Cup by saying worshipping football celebrities is against Islam",
                "url": "https://www.ndtv.com/kerala-news/muslim-body-laments-craze-for-soccer-among-youth-in-kerala-3553491",
                "urlToImage": "https://c.ndtvimg.com/2022-11/o6ccjudo_-a-30-feet-cutout-of-argentinian-star-lionel-messi-has-been-erected-_625x300_03_November_22.jpg",
                "publishedAt": "2022-11-26T04:11:43Z",
                "content": "Kerala is known for its craze for football.\r\nThiruvananthapuram: A Muslim body in Kerala on Friday came out against soccer-crazy youth in the state, who have erected cutouts of star-players in suppor… [+2959 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "IPL 2023: 3 Released Sunrisers Hyderabad (SRH) Players Who Can Get High Bids At Auction - KhelTalk",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMidGh0dHBzOi8va2hlbHRhbGsuY29tL3RvcC1saXN0cy9pcGwtMjAyMy0zLXJlbGVhc2VkLXN1bnJpc2Vycy1oeWRlcmFiYWQtc3JoLXBsYXllcnMtd2hvLWNhbi1nZXQtaGlnaC1iaWRzLWF0LWF1Y3Rpb24v0gEA?oc=5",
                "urlToImage": null,
                "publishedAt": "2022-11-26T03:59:09Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Sandeep Dwivedi",
                "title": "Will it be worth watching sports without the 80s kids Messi, Ronaldo, Kohli, Nadal, Djokovic - The Indian Express",
                "description": "During the decade when McEnroe, Borg, Maradona, Tyson, Graf were conquering new peaks; Tendulkar, Sampras, Air Jordan were making heads turn, unknown to the world, a set of very special babies were born around the world. And now even they are on the way out a…",
                "url": "https://indianexpress.com/article/sports/sport-others/will-it-be-worth-watching-sports-without-the-80s-kids-messi-ronaldo-kohli-nadal-djokovic-8290600/",
                "urlToImage": "https://images.indianexpress.com/2022/11/Messi-Ronaldo-Kohli.jpg",
                "publishedAt": "2022-11-26T03:35:10Z",
                "content": "Sports fans of a certain vintage wistfully remember the 80s as the best days of their lives. It was a decade of the GOATS – some were conquering new peaks, some were starting their journeys and some … [+5687 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "‘Buttler leading England, Cummins Australia but where is India’s captain Rohit?' - Hindustan Times",
                "description": "Chopra said all the other teams around the globe don't change their captains as much as India. He gave the examples of Sri Lanka's Dasun Shanaka, England's Jos Buttler and Australia's Pat Cummins and said Rohit Sharma should play more frequently. | Cricket",
                "url": "https://www.hindustantimes.com/cricket/buttler-is-leading-england-cummins-australia-but-where-is-india-s-captain-aakash-chopra-wants-rohit-sharma-to-play-all-odis-101669433008158.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/11/26/1600x900/ANI-20221030286-0_1669433121269_1669433121269_1669433148566_1669433148566.jpg",
                "publishedAt": "2022-11-26T03:31:24Z",
                "content": "Since taking over as India's all-format captain almost a year ago, Rohit Sharma has led India in only six ODIs - three against West Indies at home and three in England. In the same time period, Shikh… [+3286 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "Sidharth Monga",
                "title": "Selecting the selectors: a key job in Indian cricket, but who'd want to take it up? - ESPNcricinfo",
                "description": "Hard, unglamorous work, lack of popularity, and lots of blame when things go wrong - no wonder it's the last choice of most eligible candidates",
                "url": "https://www.espncricinfo.com/story/indian-cricket-selecting-selectors-key-job-but-who-would-want-it-1346482",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349700/349733.6.jpg",
                "publishedAt": "2022-11-26T02:36:33Z",
                "content": "CommentHard, unglamorous work, lack of popularity, and lots of blame when things go wrong - no wonder it's the last choice of most eligible candidates"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "'Only Dhoni has mastered it. And I'm doing it at such early stage in my career': Riyan Parag 'not even close' to goals - Hindustan Times",
                "description": "Ahead of the IPL 2022 mini auction, Rajasthan Royals released nine players but Riyan Parag was not one of them. | Cricket",
                "url": "https://www.hindustantimes.com/cricket/only-dhoni-has-mastered-it-and-i-am-doing-it-at-such-early-stage-in-my-career-riyan-parag-after-being-retained-by-rr-101669389529389.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/11/25/1600x900/parag-dhoni-new_1669391369690_1669391378245_1669391378245.jpg",
                "publishedAt": "2022-11-26T02:31:57Z",
                "content": "Ahead of the IPL 2022 mini-auction which will be held on December 3, all 10 franchises revealed their list of retained and released players. For Rajasthan Royals, nine players were released but Riyan… [+3055 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "‘You can’t ask these questions... What do you expect Dravid to reply?': Ashwin - Hindustan Times",
                "description": "Dravid's stance on Indian players in overseas leagues was criticised, but veteran cricketer R Ashwin, who was part of the World Cup squad, hailed the coach's reply and lashed out as the debate on this topic. | Cricket",
                "url": "https://www.hindustantimes.com/cricket/you-can-t-these-questions-what-do-you-expect-dravid-to-reply-ashwin-on-india-players-in-overseas-leagues-debate-101669389975337.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/11/25/1600x900/dravid_ashwin_1669391662034_1669391667288_1669391667288.jpg",
                "publishedAt": "2022-11-26T01:44:37Z",
                "content": "Moments after India's T20 World Cup exit earlier this month, there was a growing debate over whether players from the Indian side should play in overseas leagues. Cricket greats like Wasim Akram, Ani… [+2289 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Windies start chase positively after Renshaw ton | Prime Minister's XI v West Indies 2022-23 - cricket.com.au",
                "description": "Matthew Renshaw struck and unbeaten century and Peter Handscomb compiled a classy 75 to set the Windies 309 for victory in Canberra, with the visitors surviv...",
                "url": "https://www.youtube.com/watch?v=xCoJe-JlH6k",
                "urlToImage": "https://i.ytimg.com/vi/xCoJe-JlH6k/maxresdefault.jpg",
                "publishedAt": "2022-11-26T01:14:25Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Liverpool.com"
                },
                "author": "David Comerford",
                "title": "Cristiano Ronaldo just highlighted perfect Liverpool transfer plan as Man United failure exposed - Liverpool.com",
                "description": "Cristiano Ronaldo has officially left Liverpool's arch-rivals Manchester United after reaching a mutual agreement to terminate his contract at Old Trafford.",
                "url": "https://www.liverpool.com/liverpool-fc-news/features/ronaldo-liverpool-transfer-man-united-25604908",
                "urlToImage": "https://i2-prod.liverpool.com/incoming/article25605831.ece/ALTERNATES/s1200/0_GettyImages-1444283703.jpg",
                "publishedAt": "2022-11-26T01:00:00Z",
                "content": "Portugal may be without Liverpool's Diogo Jota at the World Cup because of injury, but their victory against Ghana on matchday one showed that they still boast an enviable array of forward options. \r… [+4211 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Afkgaming.com"
                },
                "author": "Aditya Singh Rawat",
                "title": "Bleed Esports Defeats MiTH to Win the Skyesports SEA Championship - AFK Gaming",
                "description": "Bleed Esports have been crowned as the champions of the Skyesports SEA Championship",
                "url": "https://afkgaming.com/esports/news/bleed-esports-defeats-mith-to-win-the-skyesports-sea-championship",
                "urlToImage": "https://gumlet.assettype.com/afkgaming%2F2022-11%2Fe5034d22-c392-4e88-9036-34bb52ef70d2%2FCover_Image___Bleed_Esports_Defeats_MiTH_To_Win_The_Skyesports_SEA_Championship.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
                "publishedAt": "2022-11-25T22:28:42Z",
                "content": "Things started out with both teams winning their respective map picks, MiTH claiming a '13-8' victory on Breeze, followed by Bleed Esports securing a '13-9' win on Icebox.\r\nWith the series scores now… [+549 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "NDTV Sports Desk",
                "title": "England vs USA FIFA World Cup 2022 Highlights: England And USA Share Spoils After Playing Out A 0-0 Draw - NDTV Sports",
                "description": "FIFA World Cup 2022, England vs USA Highlights: USA put in a spirited performance to hold England to a goalless draw in a Group B match at the Al Bayt Stadium",
                "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-england-vs-usa-football-live-score-updates-3553561",
                "urlToImage": "https://c.ndtvimg.com/2022-11/3rsm5j1_pulisic-vs-england_625x300_26_November_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-11-25T21:17:55Z",
                "content": "FIFA World Cup 2022, England vs USA Highlights: USA put in a spirited performance to hold England to a goalless draw in a Group B match at the Al Bayt Stadium. USA out-ran England in the middle of th… [+513 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "Sampath Bandarupalli",
                "title": "Stats - Latham goes past Nathan Astle - ESPNcricinfo",
                "description": "He also scored a record 65.6% of the runs made during an unbroken stand of 221 with Kane Williamson",
                "url": "https://www.espncricinfo.com/story/nz-vs-ind-2022-23-1st-odi-stats-tom-latham-goes-past-nathan-astle-1346466",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349700/349719.6.jpg",
                "publishedAt": "2022-11-25T20:40:44Z",
                "content": "Stats AnalysisHe also scored a record 65.6% of the runs made during an unbroken stand of 221 with Kane Williamson\r\n145*Tom Latham's score is now the highest individual score for New Zealand against I… [+2501 chars]"
            }
        ]
    }]

    // const fetchData = () => {
    //     return fetch('./data.json')
    //           .then((response) => response.json())
    //           .then((data) => setArticles(data));
    // }
    
    // useEffect(() => {
    //     console.log(data[0].articles)
    // })
    return (
        <>
            <section className= "banner">
                <div className= "banner-main-content">

                    <h2>GET THE WORLD'S LATEST TECH NEWS</h2>
                    <h3>World's Leading Tech News Portal</h3>

                    <button>
                        <a href = "#">Know More</a>
                    </button>

                    <div className= "current-news-head">
                        {/* {data[0].articles && data[0].articles.length > 0 && data[0].articles.map((userObj, index) => {
                            return (<h3 key={userObj.title}>{userObj.title} <span>{userObj.author}</span></h3>)
                        })}  */}
                    </div>
                </div>

                <div className= "banner-sub-content">
                    {data[0].articles && data[0].articles.length > 0 && data[0].articles.map((article,index) => {
                        if(index<4){
                            return (
                                <div className="hot-topic">
                                    <img className="hot-topic" src = {article.urlToImage} alt = ""/>
                                    <div className= "hot-topic-content">
                                        <h2>{article.title}</h2>
                                        <h3>{article.author}</h3>
                                        <p>{article.description.slice(0,153)}</p>
                                        <a href = "#">Read More</a>
                                    </div>   
                                </div>
                            )
                        }
                    })}

                </div>
            </section>
            
            <hr/>

            <main>
                <section className= "main-container-left">
                    <h2>Top Stories</h2>
                    <div className= "container-top-left">
                        <article>
                            <img src = "./news.png"/>

                            <div>
                                <h3>Best Used Cars Under $20, 000 for families</h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea sint, nisi rem earum fugit? Facere veritatis sapiente eveniet quibusdam.</p>

                                <a href = "#">Read More <span>  </span> </a>
                            </div>
                        </article>
                    </div>

                    <div className= "container-bottom-left">
                        <article>
                            <img src = "./news.png"/>
                            <div>
                                <h3>Best smart speakers for the year</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                <a href = "#">Read More </a>
                            </div>
                        </article>

                        <article>
                            <img src = "./news.png"/>
                            <div>
                                <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                <a href = "#">Read More </a>
                            </div>
                        </article>
                    </div>

                    <div className= "container-bottom-left">
                        <article>
                            <img src = "./news.png"/>
                            <div>
                                <h3>Best smart speakers for the year</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                <a href = "#">Read More </a>
                            </div>
                        </article>

                        <article>
                            <img src = "./news.png"/>
                            <div>
                                <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                                <a href = "#">Read More </a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className= "main-container-right">
                    <h2>Latest Stories</h2>
                    
                    {data[0].articles && data[0].articles.length > 0 && data[0].articles.map((article,index) => {
                        if(index>4){
                        return (
                            <article>
                
                                <h4>just in </h4>
                                <div>
                                    <h2>{article.title}</h2>
        
                                    <p>{article.description?.slice(0,153)}</p>
        
                                    <a href = "#">Read More <span></span></a>
                                </div>
                                <img src = {article.urlToImage}/>
                            </article>
                        )
                        }
                    })}


                </section>
            </main>
    </>
    )
}

export default News