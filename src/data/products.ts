export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  mobileSubtitle: string;
  price: number;
  comparePrice: number;
  rating: number;
  reviewsCount: number;
  mobileReviewsCount: number;
  badge?: string;
  badgeType?: 'tertiary' | 'secondary' | 'surface';
  category: string;
  tagLabel?: string;
  desktopImage: string;
  mobileImage: string;
  pdpRecommendImage: string;
  mobileRecommendImage: string;
  description: string;
}

export const BRAND_ASSETS = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1UYyGvLJuCydA0P0ozZlO7wiq5i2p1pO7lBqOqqkP6zTVDRiJrpy8E3KXFMvjEvvWulaQ6pWQxypCBlc7NxTklF9kvpoN-yc1S-an91lrWSEA5JaNL36-yKyOGKjaLCFT0iEO7_wehc3rAqDLqzyPIpLhNc0SZzl9-mw6yTYSXi3mJMlAsZjmqQdCJyM6j5lykg91qSRu52iGTw5D48bIOfkAthQ63USwlrb72OsVBpviSmlaxwuIcS",
  profileAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsfR7bXDovwd1pFBEYVBUmrWLHnjA-250TADQxeNlNZ4VuGZj5BSS20CNJrcpLRCidWd1PsfPmZuPbHUqf_kUE2llrqfzF2eXtdlH5ErWiiuE-xRNh8vUaOzTB5t6oiFdIPVZp4uaQ6nbH14t4_J2umcIoBx7Yb7s8xOs2-yVhCvrAe7lCNjZW9eYff9gs1NZqASu7qIivSKlp5SenxVGilNb_nm262SWFme7s8wACf6SZ9BlqJuA",
  desktopHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMTbpBGf8Tsb7LQ71PqWNPo4oUeFrD2pD5cP5QR2_Y0BymtvNBkfHmWxd-tK2UgPgTQGQFk7xS3SVsSXa1ii1XhN5vslCRP5NE5vSp3LOAbwzXkoOAAmpFXNwXaI6Rn3AO0N42HBc-o3vV9Ut5BLsaQXrrW_0BxzwwX-cCHgFfFqjQorsqBBB-Vh1dDJ4Du3y2148mbyqAp4B1iqcnhHaZJcpBtx_sE0N_HQQaAEYq0ys0XU6_xfs",
  mobileHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDm84cDxUPBRb5q_QphiQFgZ6Oi3SzYgTT4Ojji3D6Ssbwb16SWiHq-kLKjji-QoEHlNO-6hid8bhJgVo1-VOk4c0C_GXSz4dHzaEhbOuwNby3PN-O46RudspxbRL6r0AI4Go1PVc2AZe5H-_3v8NMClxVXR1HcOjUOZCnIyCHv60FqsQRz2us2urf4EWXO2QbGP0l1PknZiQ6uYUUnwb7xOSvAUidJojYEmrLRBYA5vlzAF3ijrs",
  desktopCustomStudio: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrTNWoLS-l_aGBA34t5E1WXmRuqVnkq2RyOm5DsKeaVtUXK0uoJ2pzRqxbxhn2wxZfY4aV2BOGzTCNICvy4WYbqGNYL6EDCjseX8anpymHF46HSEocbt-qAXcY4VryJ9T2vsxuXg9pfapqEwPs2Hr3Rf-CvfScbQDckTtGAQ_HHPsjlGow5e4jBIPCb4kdCm8VDQ06Cn7Usv1l6dq2pvA9SmD4UtVT5gO5u4E26jqRk7FeY584Igs",
  mobileCustomStudio: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJHs_buh9J7PismF3ihvnPl73lb9gTYzz5FzLBT8HfXtVFPILEG08MFVTFixy0o8dBriCNntrtvKo_o7ayeUUcrZ0qdLYIlcfBcT31OM1n9pObu4lIJ8JL5xOCaVJepKcadBEHJtpygN9R_O00Ap4Gjw8xN9_DK6YIgwmoGc5F6lOL0YGgyFXT0EkvgIanYvuFjHprDxDXapcm0LFpzSfoCcefbBPLlUhsJVW5iNaz2kIiokAri4",
  desktopStory: "https://lh3.googleusercontent.com/aida-public/AB6AXuD397DkF3iuN4cirWjoZukEiaPATiDXGVxsVmZUUsJ3iApFZy-HisGdKrXNrx31fE86HazyXCopz_J9cvtQd8JMhd5S007SI2Vfa-dJDV7SXjN8sb-E-UTnRk7Kxg5h51FBgROh_SVcSglVssY953OyBBj2V2e6AUao1ir-SrXAf3tNUIeyorAUxfgU96yYRm_vCtxZKf0hpFiu57zygZPfHxd7W73bxaH_Rh-CrC0gMsi9T5JpqmA",
  mobileStory: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2htcbZLyZLSv-VWsuGoALpvXU8EBta3bqscilfTpnBgno5-Cs30QQandfulM9hIU1yDjEjFCpGw9XmA270wq6r9tIrpFCgUH0yWj_PVtVZti8Bai_HXPZQLX0mDOEaWjziyMqE5nr_cW1shRQzPkuOyB3Kovp1CTiy1X7CnuRWBog1dyq0pzk6_MkxIatewNQd60cFPJiCbLSKCVZHbUe3shQOZzQUqzD9ZVMk3d7gN9L4Lvhsr0",
  sunitaAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD2fVkWUpHPj4RYl6wdMY3duOB7qdl0PwQqAFWIWugkPydntJtjMGvNFsCU5UE5p7LdAcp4jfHxMemny91ylDpYyVQONld-BkH7EoLhmyFIg0OBBclgCJa7sw9qvEHXtjJohi5i8SJikEBmJxohAFaZ2-PWt_OXGbwh2qUw2V0ppnJAksvu2AsZYKgLh5ps80zpQ9_Be5JgrNp3csl3ZfeLBRh2QbUCVo6ChUpwUgYv46ag4VLlSc",
  craftTabImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAoGf6VMFSKnnLZ_FVvakCo9GEbtIc-PzqdOElCkVWYHIUGTbize8g1rOs7fNjBu0UW3PuhnIVnSuGyHkdhTna7tWIFkkr61oLNbUYaVfJgZ2u3VHoIBssqXNndWdzSsJw_oejsliS0xYg0JqORKCJYr7ykd_UUg-vMSN2TeOvwDvoEh4aj0Rhj4YAWHZUiSHe1CJtkhtcVowU94yP8QZjZQPcCK0Njb0G8YqWIER-PjJYMqvLHKM",
  mobileReviewThumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV2p9YmqRMI88w1eg5fem88OF8RbvMg9XebvncC-GqaK98lLmYsm3qJ_halOSEzCZ9vO_PyKCbQ2zDszaUMXvKredGr-9CbSFdi7pmo2m1ayFgu6Qz9-HubxZRcHKr8FSqC1MmoNRfCIPTbR0HWBZpgByYXF4-A5USHl90tIKyUh5NfWTe_KGVk6KlQm88fpLJdkwoOLkwbHjPh1nlkWZErC76oYk9232kEk0pcZIjO5F7YiqtR8o",
};

export const MOOD_CARDS = [
  {
    id: 'someone-special',
    title: 'For Someone Special',
    kicker: 'Birthday • Anniversary',
    mobileBadge: 'Loved',
    mobileSubtitle: 'Birthday • Anniversary • Love',
    desktopSubtitle: 'Gifts carrying lasting emotional warmth',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiWH5pWrxQMGWoE5a7fqiPIobuaUcMhB3_rsscCMuQSKUBfNDC6NOmy-g6zrOv_jeglQLlV6dXS8CpUGh1Bl9d6IEmTZYnEPdjbYh7j35lOtV4WNBPp3QZoZezeLBtW0cXkwEcbFstZRKARztqw-TGdCt-FtA1oH7ctLj66GNzS5TBrHIsbQTFSWYGNXSenBdhXeBMxn-7MAL1ZI4brMmY-uwbd3m9BkGWt8dIA1lqSo0HqQg_IGk",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATzPmjRAn_1fKuwt0_Lgfnu_Ltys9ezvC50O1Gfrk7xB4DOHSbxFZ1_fLdWYD7uN89uvDow1cTQh8rUmKTIhwsk8eNpCatgu9yNHCWrIq7JKxns50WqQA0P8lAl49VIB2jRnZ88zRDk8Ds-AG_V4FECF2OHEBx_CfRDa2Z2jxkdIlbhh4KwRzodsElPlm2j3xnasmspishJt4qS8xnM9qt_IDNS1b7dV0Z4S0w8-euNjuZiM4Krok",
  },
  {
    id: 'just-because',
    title: 'Just Because',
    kicker: 'Flowers • Charms • Trinkets',
    mobileBadge: 'Little Gestures',
    mobileSubtitle: 'Flowers • Charms • Trinkets',
    desktopSubtitle: 'Spontaneous smiles delivered right home',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH0BSTdK0yOoaKeCSutcGoxbKWjznwpEmo59hA9Ppt6ToUi0EHp4NPtP7LJ-jZjIMC7v_iMv81Yi-boQBxjh_FBCWXG5OITCY-jBBU-JFwwV0-wem3MAsor9zB9tXG3_hSJeTtZEdzWT-Ot2L9VgHWYi4_XkUNT8ufwsZmmOAhHbqPSZMc6vwRVuiFqQyMxddmwb--3ArE4DsOGZcQtG-Uj6I1oIJ7hV4UGDUPtezfzcUUZpUHi2Q",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVtqCEEjTSeVZKo92xDPzcHrUQobMTN1-7YvmmdJ30fvYhPD531QcVJs0vqAs85crym2F3domeJ2KXve3e3L6QCFc6LnQYAmsKCFvucW5f7FBbeU4NfQtM4F3Nu9CZwKcUpNH1BLzc5T1SzFIHphCNPZBpMBIrB_Mtv3uKoWMfwnQzJ4o_mYZzH5XGt-_c5RTRdZpHB1JTxKyrQ1iCibyc-6nLdCweCLsVowpAmPwVQ0vOSJ2ubAE",
  },
  {
    id: 'little-joys',
    title: 'Little Joys',
    kicker: 'Amigurumi • Collectibles',
    mobileBadge: 'Cute',
    mobileSubtitle: 'Amigurumi • Collectibles',
    desktopSubtitle: 'Playful companions full of personality',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCChr8H2R8ODvvgdfS1dIcBfIPfxKorDoXEO82H4tN2vLaCWkORHsR3dDUvZWyN0y0GltlokOc1EwuuwQr0KtAgy0nTL8n95c8cq9AXfwGRPk9mQEjrwZj6qEyiHpY2pGXpWyYc1hTSaohG3jxtzPxzo89_pRhUReE-2gT29jey1pJTgCra2ZdPqFk861KbI5sZuclacU7Gb0uhYWajrrCO4lGHnt-lFxWJa-QLwn0SZ2yGU9dwYpk",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQq79Y6gFxABB5LaKqIThM86BqNPNEA-dqas9SyE-ePBeDaOAE-kx5hhbgSQRkf4F7CGSqsr0MkL7ah3sxA2dPKkzIrRfC-pb3VQ-c9AaeJfTQtmh_vxgNfeDCvooi7IFdqe4d5HZvxzxb00h1FyU2RHCn0vfZcU97gDWT_6ElhmFa5x3AP0b2zNEcVkqMKuTPTqR_iaJVyRE3lYmbqLmTawzvhVQc1o0UrncyiLD3FTFd-1U74qc",
  },
  {
    id: 'everyday',
    title: 'Everyday',
    kicker: 'Bags • Pouches • Home',
    mobileBadge: 'Daily Use',
    mobileSubtitle: 'Bags • Pouches • Home',
    desktopSubtitle: 'Functional aesthetics for mindful days',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-SS1O_Mdoe-e_4rSQ5Xt2ZiRTdPLNceb3eKWr7Fa9GBOsNswyH5o0vrcuvEn28dL7_i5bdMmbqvTgX1Cl6k79xl2_l7FUCLd9OYXVODwo1Xx3xznzIgDLM3_Uv1L-fxq1c7_8ATHA4btLmCvGvNKuHOAEpDnu17zWgoSifXx53AUCApubtpraaW4gLWdOmhtduH7wrDcrXhKA-oLjp6Yl86J-cBkrIWGRaZZtG7H1uVVZtmdOwbU",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuARJ6yd56uYIKI3xmX03tnxU2_uc9h6Oi5nHVu0tArR49sGytxkcdnlmXI_slRODmOHYair2iSb6nWMWc0Vg9g0AYQzmQjKXvxY4h8ZEfJyDLHLUjawAhR2tfGfnXe2Pc5kZg6E1XEdHuGno8c5TlMuFP8Ah4dEXknqh4K0LEyIhcF-jZxNbF4astMCBsL1EVTgpBPQtJ2ZrdVeeeyopi54ZwMrlRACDnpoL1iqGwFLPbfRVLm1ZhE",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'crochet-daisy-bouquet',
    name: 'Crochet Daisy Bouquet',
    subtitle: 'Pure combed cotton yarn • Set of 5 stems',
    mobileSubtitle: 'Pure combed cotton yarn',
    price: 899,
    comparePrice: 1199,
    rating: 4.9,
    reviewsCount: 128,
    mobileReviewsCount: 124,
    badge: 'Bestseller',
    badgeType: 'tertiary',
    category: 'Flower Bouquets',
    tagLabel: 'Artisan Florals',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSGG43dQq790nRX6hVoK5ay8wRr36SfsC22s0mrRBIFgdHBu_j1hprFeUFdqoRuRkJWCwQwEfxfukWOlRjMF2QoXe9SAlvgDfAnx5nefKeCABpohgkN_wstUOZwGOh8JELnDhcAqX-xV0qLmBA0ZLPzLw3DWR_NydSBiK4M_XTtBPVFVX7IonpThJCrTCdc6EB8cSrX-xnJny5HinCvlW2pi9V4nmchgIllPtYTssuluuEUw0_GX4",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM25d6iYj7MoJm2CK9dIIDNrMjnoIsauWdE9oKzC5qnl82KqLwZQu6r-bHkWosT7p7jJwZnGhLeyiNkgobTds1BwswFPy0mUxIMp6gksoTOgUhK513d75UqCgYYD_s5O1WB4_AQ-ktcE4X9-N5Cex8hXh77Tk0BwH0GOLLBTwJ3_Wo7ARSIbbHEMfSusPm4eVJoDRXZX9IrYBXKNsQsVb2cL1cnZAujugMu-UXCWz0D5SMfiam_sg",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdUUaHgMI93oSu2PcW9f27lTr4geNQq1LhgoECZn34leuxYGOX4JhjwO_u4Stt7BmI_fp4BLW6mFJCVAT-EYfT4dGP8x9LVDCCscJ-p0SsIqDDpv8GvuB3NAmvxu9JdC_i_EebZYOby6j8Mq_murKlRy13aKvRPBCVfuXCV3-Kg2E0bcd3zMfV66yhsJpwZRl8HuLsHPCB92TuWEsYWyxNpQ4cxGul1looq8cQFYxeiwES8vZ44",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9JmLPer0xG06vdIlEWFO1lvEWbHI2FP-99JEkXfFoBtUTDEeUtcoUA2Jwe-dOYCE1WBPX1ErApCLbOZYyzBNXM_LJfSOaE_mLxNN1QqsrlQzLXT6P38HkCxYeRpqfI35-pP-8F6XQAwziCTFdsMn45xW8h9P4461fW575hQfW3ojjm2wEWdUEVGlQUry1A8J70C1_AfP25bcEOcWsQIS0YCk8LrhnPsoGdaZgprp-bsOF0KZr1DU",
    description: 'Handmade crochet flowers designed to last far beyond the moment. Everlasting, thoughtful, and delicately spun.',
  },
  {
    id: 'mini-crochet-tulip',
    name: 'Mini Crochet Tulip',
    subtitle: 'Includes mini ceramic stem stand',
    mobileSubtitle: 'Includes stem stand',
    price: 399,
    comparePrice: 499,
    rating: 4.8,
    reviewsCount: 94,
    mobileReviewsCount: 89,
    category: 'Flower Bouquets',
    tagLabel: 'Single Stem Accent',
    badge: 'Pocket Bloom',
    badgeType: 'surface',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEI24U_L9ICn5Yp-c3RAvhmczUKREKnCkoQkOFODn7IvHhhGbvtYAvEpL33okjIXPH3QXEYDLDMj2Q3Ox7MA0Zd0avdbcT6csOHqnpjKVsg7pTksAz6p5heqzQB9AIWavqPnmFPF86kYoopL09E5xNhWin0Z3cxpbP-vC0Kzs7Eux7mahXNQpi7VWyYGeLwbc0jskuzLtNAq75-MDLNpy16GD0vameKRvUyNqaBW8PhDAtnUaHtFg",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2i2kyOuSR8HPzggMhhPPF6wwOo_zdldJRY4ANpRvOJJFEp6qmvivfpxfgOJevllKinRPBiSdZYIIMFS6n4SdpQZ8IIhgsXZGS6wBsWjda5bY63H3apFnQYdf3n6IhJ1d0BvKk2Zs3HrTuWTXyYrYdGXg50Gd1-ZhTTRFdN9KYd2TSocPxu5DkEAIijHhvMQEQjd9C2mG3c99OoWgP3XVdHC1KcNmXxcenoIvBEB3GLUuM8P8ATKE",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2pwnHAvIwa_d99hhZfPTcf45f3c6Z6TMpvpfK_WYs5b5NSuC4494d8X2EtkjPzSlZeRkuDtYAuwJJGJLj55niMNVJhZrBoBikDoRLjIDlHUnSC9ZB2jdJLHmybhTUaSs2111kaRHuUaiN-wv41CkOw-U4Feah6lMmo67If9835bqyLR06YTPE5bbCi2tEVeDP5JIl6vNYu_C6CCJbphPRNRrc4YGiUh1z-DuqrKKc5L1xoxm_pqU",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC59d5_Yp-cLUiZVKsNrPuZhDhULSQVmTTzyQSJimlSgAzqgGlpz3tN0O_KzOSDJHDzLIqkvZ7R6minaF_GEHtBINy1jtXrRb9YBymY245QFUt5uDINl9d9oNl7Dg0F4qUqNJiZQkuN4diKBSmx9o7FIi0CqWy6-iw6UorxHNTNTDZxEA2I2MJnSrv6MOAKBplRrgwwlllo8RlkZA4ajzH1XxF0LSjIXlk3U_dzsPKvRYnkbkpnxCY",
    description: 'Single flower keepsake spun with pastel peach milk-cotton yarn and a pliable sage stem.',
  },
  {
    id: 'crochet-heart-charm',
    name: 'Crochet Heart Charm',
    subtitle: 'Solid brass hardware & velvet cord',
    mobileSubtitle: 'Solid brass hardware',
    price: 249,
    comparePrice: 349,
    rating: 5.0,
    reviewsCount: 210,
    mobileReviewsCount: 64,
    badge: 'Top Rated',
    badgeType: 'secondary',
    category: 'Bags & Accessories',
    tagLabel: 'Token of Love',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-TdkdO0vzEVQGDrOGd3yFFLXCCcgKjKPIBkeMe85eHm_KXnxBWpEaHWL0ZP-WwbVsXjkmcXLMxQ09fIR1NvRBNdSm24QBffQ8Q6Sk70Y_HvFIwDRzceLLQPaZKlSiMtyGhGYkFe1A3zkEI7PWnS5ZVbynsvJ170Hd9pDr8__yp9E5X0uKRKg1vO7dY--JsZNg_T8LbMPqpkquYPWbGq03nqqepbsOfRpH1VoGpeNKHNKnsTznrvY",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6hwFNIGdkerWbBUOrgfMgp8CeaN7cPOruxej5wtaev4M4E3x1Il8uIrX64JKcleB-Y3LpP9IggHUeLXR9OS6Ms1yi8yGP9d7tJ7pXijjJIl3oEfpdnhf56Iv9_hN3BlkR4y1L0_SEsifqakV0UHgZi8gJCejyVZGiq7nni-oyiysFIjIvRcs-VMvF5A46KvTkSnQbpEnz4MeFtccGceFMvpO70hWr2iRPHJOCnX_F9cHl78zFw",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWI52bDGz9CsLTBK36_TeDafOmyJEjEe-ziZ4VMIa94ZnIvL9zVWKbW9QVxSNlDOEA6Zo2zs1msX7Lhdz-ci9j6jtyI-K0Z9QxrvksMFWDgREpFRx8gyaMuh5CwjzHsOhOJtTOql8jI28FkJQdNdQD_eP3XummyahVfgfAbjNzLqOHX4KpEEoJi04OY4_dh9UDrmfkGadBB1dsuRR0dDDDhpt2EPFr3PszzzPPN6x1KK-TyaoV_Mc",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPx5npMYoXaxvMKiCqYS8x6ZHxyCQc7KlhaYsc4D_UD1Mq7y9CMj0OsaDP8S2jQ1TK4ar7ccGvqo8MYEBPPfbovduHUCn4zsj8GbXFHLesw4QbPrpayRKHKcAgpWoAE6ROc1defnkwytwi1HZRk5ezcpS8EQt4SG8Lk9YLWVvNJ4sOopCdnfX0LfYxhEFfDMA3gUD5KUZTC9_4_rqCUVxnGpplneqZmj0IG8sj8s1wG91Kw0WblUE",
    description: 'Puffed dimensional crochet heart charm keychain with antique brass clasp.',
  },
  {
    id: 'everyday-crochet-tote',
    name: 'Everyday Crochet Tote',
    subtitle: 'Double-ply sturdy combed cotton yarn',
    mobileSubtitle: 'Double-ply sturdy yarn',
    price: 1299,
    comparePrice: 1599,
    rating: 4.9,
    reviewsCount: 76,
    mobileReviewsCount: 42,
    category: 'Bags & Accessories',
    tagLabel: 'Daily Carry',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO6SzNpMPwMN-IFoPVFVi4rmzdwgheDhhmLG7NyAqOxTKiqJFA_rMJ3ACscH95VswrK1k4xOzGUjmy4S7Fi9DlmC8eGSfspSCWkrE3myDBQDcNcNhdf6kTdl97kArJGONw-4GCS5u-cCptXC6rFcrwVQ-Nsjp-HYII0LHN5lUtTOujTJf8bATNTUUbZUXYyupuOieKDAtHQUbaV8BbmzO7J1GSE1bItWUUm9k7fKtYjqCkdps2rZw",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO96MA1ZIniImh2W97iKh_ISKUWvXidyIPgMP7XTO4uSgZ-9U0JncUVl7W6uWjMOHz8hWZ6Iq0q0q5gqeSn9jZfcBDntaEyY_vUEAa4iPAT3GCAjiDN20NAIvSpaQrsb_uWHEoUYmGWoP-9DJy_dUkx6FHjdaDK7JVXX19D4TB8yyt7MnHrksPkgDh1arLYReZojZgNypJZqRKAdIfeEsmUWWLtLlXnyrEiz426lsvlFIYK_KVtvE",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO6SzNpMPwMN-IFoPVFVi4rmzdwgheDhhmLG7NyAqOxTKiqJFA_rMJ3ACscH95VswrK1k4xOzGUjmy4S7Fi9DlmC8eGSfspSCWkrE3myDBQDcNcNhdf6kTdl97kArJGONw-4GCS5u-cCptXC6rFcrwVQ-Nsjp-HYII0LHN5lUtTOujTJf8bATNTUUbZUXYyupuOieKDAtHQUbaV8BbmzO7J1GSE1bItWUUm9k7fKtYjqCkdps2rZw",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO96MA1ZIniImh2W97iKh_ISKUWvXidyIPgMP7XTO4uSgZ-9U0JncUVl7W6uWjMOHz8hWZ6Iq0q0q5gqeSn9jZfcBDntaEyY_vUEAa4iPAT3GCAjiDN20NAIvSpaQrsb_uWHEoUYmGWoP-9DJy_dUkx6FHjdaDK7JVXX19D4TB8yyt7MnHrksPkgDh1arLYReZojZgNypJZqRKAdIfeEsmUWWLtLlXnyrEiz426lsvlFIYK_KVtvE",
    description: 'Chic everyday hand-crocheted shopper tote in natural ecru and sage olive motifs.',
  },
  {
    id: 'sunflower-keepsake',
    name: 'Sunflower Keepsake',
    subtitle: 'Bright aesthetic flower • Single stem',
    mobileSubtitle: 'Bright aesthetic flower',
    price: 499,
    comparePrice: 649,
    rating: 4.9,
    reviewsCount: 84,
    mobileReviewsCount: 84,
    badge: 'Bestseller',
    badgeType: 'tertiary',
    category: 'Flower Bouquets',
    tagLabel: 'Warm Sunshine',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZIJxjtZw7PdX2MqBFVYzCXIkoy_v5HDYuwSDujSVBWigEpRMOnLxJ338T8alGA2QzUktYS2OO5OMBg-Guhb4V8pleUtgS6Ti4v3Z3DUbcI0qb4pxBO-MpsQ6uvXtBhF8clebmvuVlVrIWsziLN8EDrcLshPbOytJ-yj5vf9I__DBIGBuO6TfWBymeX23dd1ICMXlIhMMnkxUqx9YixtlwOX_ATUtZ6k6Rac4ugQ3Pz3RAhqawLQ",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_eLMUTTeC_7dV3qe_uKE_p_Rse7Ziz7SWnBtTHN5DQLg4DKVg3a6N1bzYwAHLxtN9aWLnuQ4LUtsz0WGLYhmlWl-aLey1hqw8RSO9-uDjkzGLic_zRjU2U2AfofYv3W9sUzP9dqQLFJg_k_TcOnGKOXpirPv7N9VPz-3Pz5vRdZUmgqLOSMYXaflDVDBiMGTXCsZBz3OzT2Z0bSPMgBNSYcOFVWK0sOXq_YVVl2quaLrP4Q5UTxE",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZIJxjtZw7PdX2MqBFVYzCXIkoy_v5HDYuwSDujSVBWigEpRMOnLxJ338T8alGA2QzUktYS2OO5OMBg-Guhb4V8pleUtgS6Ti4v3Z3DUbcI0qb4pxBO-MpsQ6uvXtBhF8clebmvuVlVrIWsziLN8EDrcLshPbOytJ-yj5vf9I__DBIGBuO6TfWBymeX23dd1ICMXlIhMMnkxUqx9YixtlwOX_ATUtZ6k6Rac4ugQ3Pz3RAhqawLQ",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_eLMUTTeC_7dV3qe_uKE_p_Rse7Ziz7SWnBtTHN5DQLg4DKVg3a6N1bzYwAHLxtN9aWLnuQ4LUtsz0WGLYhmlWl-aLey1hqw8RSO9-uDjkzGLic_zRjU2U2AfofYv3W9sUzP9dqQLFJg_k_TcOnGKOXpirPv7N9VPz-3Pz5vRdZUmgqLOSMYXaflDVDBiMGTXCsZBz3OzT2Z0bSPMgBNSYcOFVWK0sOXq_YVVl2quaLrP4Q5UTxE",
    description: 'Delightful handmade crochet sunflower stalk with vibrant yellow yarn petals and rich cocoa brown textured center.',
  },
  {
    id: 'pastel-lavender-sprig',
    name: 'Pastel Lavender Sprig',
    subtitle: 'Dried look heirloom • Calming flora',
    mobileSubtitle: 'Calming flora sprig',
    price: 449,
    comparePrice: 599,
    rating: 4.8,
    reviewsCount: 53,
    mobileReviewsCount: 53,
    badge: 'Calming Flora',
    badgeType: 'surface',
    category: 'Flower Bouquets',
    tagLabel: 'Dried Look Heirloom',
    desktopImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS2Yr92jwSXRDoZsqvp2mg3pIqEjqWqDgKh1tetsalat8vZSdpqNdri-EMuBa4U9srH9jJ1S_YXIXp7QFGeCpLo3GsaYUpQg6zJs-ug0HB92FIZYn2EsKka33dAbp2M-HQfHY8Hisit5yxGQJkvi6jBoZY7gizeQw1Ux6CAzQIJuA0qP7fbSR6UBZoCAyI6Pu_zjn5ZTqEu7yopdJVnzoqDNF3SGI1oqWnrr5h5aRBaIpIBFh6B_I",
    mobileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS2Yr92jwSXRDoZsqvp2mg3pIqEjqWqDgKh1tetsalat8vZSdpqNdri-EMuBa4U9srH9jJ1S_YXIXp7QFGeCpLo3GsaYUpQg6zJs-ug0HB92FIZYn2EsKka33dAbp2M-HQfHY8Hisit5yxGQJkvi6jBoZY7gizeQw1Ux6CAzQIJuA0qP7fbSR6UBZoCAyI6Pu_zjn5ZTqEu7yopdJVnzoqDNF3SGI1oqWnrr5h5aRBaIpIBFh6B_I",
    pdpRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS2Yr92jwSXRDoZsqvp2mg3pIqEjqWqDgKh1tetsalat8vZSdpqNdri-EMuBa4U9srH9jJ1S_YXIXp7QFGeCpLo3GsaYUpQg6zJs-ug0HB92FIZYn2EsKka33dAbp2M-HQfHY8Hisit5yxGQJkvi6jBoZY7gizeQw1Ux6CAzQIJuA0qP7fbSR6UBZoCAyI6Pu_zjn5ZTqEu7yopdJVnzoqDNF3SGI1oqWnrr5h5aRBaIpIBFh6B_I",
    mobileRecommendImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS2Yr92jwSXRDoZsqvp2mg3pIqEjqWqDgKh1tetsalat8vZSdpqNdri-EMuBa4U9srH9jJ1S_YXIXp7QFGeCpLo3GsaYUpQg6zJs-ug0HB92FIZYn2EsKka33dAbp2M-HQfHY8Hisit5yxGQJkvi6jBoZY7gizeQw1Ux6CAzQIJuA0qP7fbSR6UBZoCAyI6Pu_zjn5ZTqEu7yopdJVnzoqDNF3SGI1oqWnrr5h5aRBaIpIBFh6B_I",
    description: 'Slender textured lavender crochet sprig with soft purple flower nodules and sage green stem.',
  },
];

export const HANDCRAFTED_RANGE = {
  bouquets: {
    desktop: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0G1nJT-yb9LrST7akZRLTTU3S10wuIImuOfROqb0RCzGdRZlUN57A79XwoNg5O_1SnMzLWMt3Qc6agRw5y-aO-itIcYa1vW_hhFbcXf84KAsS6r5MZDr6YqlgJndpye6spJl2IY2aJ_RXDwkDjTUM3IAjVPnvvEitZjckooMxuO_olZhKhXuu04UAOUZgQKdGe8ABnF3sedybnDpy35adO_TxPYlGnZi4_M42Jf59uA-RKKBe9i4",
    mobile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrW1bKsX2KWxC9wDXJnNuzABUMUFU-HCWXfgGcu_a-ZisE4KSBEY8BSK4PrPwAHYoQLeSv11GlimYbogZgM7xKYv_qUQWrcAFb4yvyuOPrlR20LA2CpsVA_dsH-nqwwqdVE22kP0t3w9JqCXK4c9eYg03rS1C2ciR1nGJw_FBSYfDdx7taAzyayr86JFNaELVRg73oqbaZyNyvgj1Mdgu9xAxoJF3a7Cvj6s0Mop73DEol_CxWYKw",
  },
  amigurumi: {
    desktop: "https://lh3.googleusercontent.com/aida-public/AB6AXuBue6WDw3KC7egoCycs1o6bMC23qObT07wVKJoVlL9gBDNGrtm2sx1UNUYCikZ0Qc212JSSMtKaHiwPSWA6MaZmvW9WtHC4qvM-cl-ajDXmyHbBiyeMmvh9XM39P0RYLj-lbLlYTsJBKTWlPUUYMdtWVvAHsFHPicRhWRjsoGfylPay6YIzCASrzzb4eE25LYTbrYTSZXqqzwo85fnjR8ERyFPVmbfUL9ibXOSVCcm9L76Fe0IxrJw",
    mobile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbF55AZAFPSR1KFHDKPpI4sYaAogJphOpA89ElPevSWATdn9A2PUlDCEy2yXZnu4ZrCoM6itf5AEGbega8CZcZ4HfvsGPhn1_h8MSgGg4FHbXlX4n4T6u-7lIbNhmS9CI-eEZ3k5CxdwSNlWYogxMw9DHO9s5NrPd2Wk29KkOat7D9pJQUErt63cS6hpr5qrEbncgTIqiP5UVOPOoFCD_AQ1wSuc7ehyBQkkF0fW9zUh-36k5F39o",
  },
  homeAccents: {
    desktop: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmFypDniUgUEJYCHp--j-ikqmoooat-kK2jhHWDIc6h9jVje3HpAKYnELdLW-IDev-PhAdLXb5uzvT6gErGGgOm1TGTYL7RgTu5eHPn3x4uH9LILwibq8bPcsmdSpwzMirzIQgFC3hqYvu7oiPLnrTvVYQ_cJ1t62v1iPXcnbkDgPtR2jw0nffds96QNEzljMP43Ws_djaGC4SykGsiB7QudS_-eQp5w7WNu49hV73t7Xf4Tl9Bek",
    mobile: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxf8_LQszjQn6Nj6FP9mPADbEK6dEAGxCxOdOlwqNU6ghaLSacityaVhT5M4ebq-5LPx98IoUiXwLTV9FoxBTKqqol1AystN7iFEuSgn95-AzXWHIi5_aXnJLA2_9VIPoV3MYnRVVg8qnM85vr4Aky4PFscaoqIxBFi2U-AOq5EBXQPHNigJtyT5oGhD-4Isw9nTdQxwOtevjkhylR9j9NT_mz-_C7NHYuPwGmfDafavzEVCZ9_cI",
  },
};

export const COMMUNITY_GALLERY = {
  desktop: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB78mkx5ofrMlgDABDyD63bcrZFC9dEGvg5WvUruAlc14wEYfJZEfCeB3SPUAiQrxl2dqZpVhvYMoZm2OdTS8LHLPgiJmcwwvwJc9GFJMhK9_MGhJs-bu1GKuJv5scnLcGyNgNLAZC1v8ohPSKshj0BB5bXzS8tfnroC4OWj95aMfs7MYGlzPCZrF8E5IZOVSdZ208uSXlu_t3XphVXaY79HBw4G5AO8CipMBuL7V7ZTOFZ00VyYs8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCyPHe-AfJ4yH_q2KZVxj7sG7GveMOYYtsYoVyK7j6FJnBhfqY2Yl7ikSz8cCKFTx8pjVDUsaSClk1qX_7G-QD2tvwfMdQJFV4okkrnRtZbL-RMyJ2_TZW1odCFy3aMvGldwWKzJ-p1uclEypRJqrPkZqIpvuh1YtyIaUe1hOh-VrJy-qeDXjyN2VTnrUnAEVgVDYf9QnwL9zHqN7W_g31Kxqt9mhkbbc0IdEEiCI_e9jN0PGrUypM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcmfmheRLiwYJFl8_U-20TE9wtJs7ZR9ndYyck6sRSeR_K-CYjl0hqq_NGtyfFexjoT7z-IwL2s5ixEXQe2fbY4Bc4yZbw0ns2fdqwth3FtQItmvEK0CLX1CpdvHwLuSwopzoAn2AANUDbvl-XUHKsSZYMnOdZScqCqGGGu6hAGg9wpxBQFByaKm8Z0JMaCIQG1P99Xzi8pnws5eamA_H0_hO_VYktwxZISyJeVOGsEvXWnx1pg6k",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOGE8I7tQ-RkS9F4eFU-kX9D8OsHjst8l01giKs7VmjNzej4bkKYIgZeoA262ia2ff2zXmiQizD9aP3y2489n27-milikCEdLtdr04IL5GeaIADE11xlqtqJoYzhi1LwaS9W2vNgJpGhyRr4ZRwRY0D1m5rmUi3J5jbg4hCgieaneePCv5fcukc0Bp7I9nnsLzsPyibG2N_gGROtJz6WsVPrZa-zwGbs1m6bXv76LNqz86j8An1Og",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrzZtFfHHMzuXesfouWo0R7EXW475meVh6tAr9gqxEeasU0xKyS5rTYHzfDFQmA8OMIf6AwxA9kyUVnovg4A668G_HwHGAfZAsoVZlEqlkfEtei5gtUvRP-7vG1EX3Rlpvs6U4-Jj4HulebKiEBO6hVxfq7sl-1re0D1G0Pgaojbx5OovxJEeRHoJcrD2dILU3xGK_19sQo7INvlqUHfy5ROF70wP7D2fnZoSW_qKJQyTry05X7Lk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8le0o0qvNKc3jA0tVcZRNHoiQbww2VeDHyzlv3M3TsKYazJkmxQKjuHDPTMomk2Hrt4XO5oa86IOtsd9C4TinLr9ELG14aoZvwkT68ClCqTGIL1957_8AWDOEKm_voU-ohRWndC5AaZ0AN7KFjoUw-1WTp6FCbQmpTS_4XyXCxeJsyqCLt4I6Rz2DJRHsOWhDM7oZ4gk0U0NTJDlxpbDbC2b0t0BvmM4iHFTjUWbudXv2EulVGlk",
  ],
  mobile: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ACsdQUsXKmrxus5SKijQkY2uIxdTM0f2m2DyEjrGAIniRi1F5ufP5CJQ-cf9iPFSnr9P0NKWGaiR9FSQFEtLA0C7fcrBbBdEIeJDn9G1vr3GFIoegN13q2hXWWbMehIEz6LBPdYVbTOcjVh7wlxVkqsE3SHl0uCBgx0DXu4PM4X0BHrkogf7hBXb2TTBDovs_vN3T8oqpZ6U_vAoRu2ngBb40axOinWJuBK1Q5JIP4xaRbCY9bc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD7euTg1xAMger--gum4bYPQlDyFmMtEfex9cTVjbr0EGa6QqAWYMnQrqBxqwB83mnXgdOskAxCn8ITrtEEWE9xtWZ8rU2z2uS6zjZRy_nkfVloA_rNDu_Z-CJKrqrpmjlYvCiMK7izv5mdhLx5e5P4v0YpYad1gRYGZMcrA8h2X93J2qnZ6lGZB4aGvHoXhUk-bVR-mFhexTsSTtv__vT7Wh21wqIfDf0fmp2gtDJ1zRfSKWNARLI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5LuKQFRMV968fvssuZSxsAU5S6TpfICIdoVmUXVXNQCtW_93b13lBr5kl9_cDHK4UzyS31GLyPsROHiKa5HAklme9axhBBkFodSx0ee1bAGDvgHXTFVdG8lVVVNxHxcNTsoQHgomlpxDP9RqmjbcZgJ3Bwabrek0NJcYRD2LH64wr3jQvlEzEdE2Y8XMsWezHIdjPM6tEugWv0gQLtrp3KJ1o_VyK39DAU5nSr1ryZ5yLb1Fwh0A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzXpDTO4KFoTpGlRC841d_k-EWIIre0UKDALf4z1ZZiSDSFgBzJODPZS_skmPpRZ2-taQQZJlgzBdMgYmXUpM5YHKPi76onGVZLDVz5uaoCLLKiyZptpyKXFmORjKx2nhYL0QIXzzSffbp4HPZ4eRzMH97FjqkKsZo65CDUW5spitxW1l3m65nJUCielSv530pfrGg__O5EAwYxdPzJKZgAHvPc4SIyC5M9llSBwv_CF0P_E0MiAg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZBOHKCh4UrT2LXhxGnA8HiAt9b2w9cHg9_nfGN3dadNjDJw0ZmbsHR5e94KUsVF5xrIV3coqysh2O8nBtghw17uapOqhBOTH2jUGCPtI1drKoz99J2B59oKh3tWTerPiOefcBjjJULZr-X5z3KoTq3mGlEKI2_oKRMZS_TuSW_cZu7I0d6_5Mpgj2fwJkL-Nle4-q4t1Vb_SHMXa86Fvm8OawKWsIpMO4bFkkLtnh35MpZOV4lGM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWKESZ4mzVn5H-0Mulw3mStH-FfGvZHYsW3d_2j2CF2Htt0ygBfw5zHn554SYKXseEZNsa52If-64FUcq7z37XafN9zJI3gQrLWyannB09RHxw8iQQ6sQ98IAbNxEwzR965MyqssgFQFFZJbGkinYnW6kVG4rq_Y1p7bvtFW_e6YBtpYkCbc80T0d4HsnZqdo_qBhuPmZ3Z3X-cSyq_VPeiYfypECV-W-xu0uoIjCvHQbJhoZSvgo",
  ],
};

export const PDP_GALLERY = {
  desktopMain: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdUUaHgMI93oSu2PcW9f27lTr4geNQq1LhgoECZn34leuxYGOX4JhjwO_u4Stt7BmI_fp4BLW6mFJCVAT-EYfT4dGP8x9LVDCCscJ-p0SsIqDDpv8GvuB3NAmvxu9JdC_i_EebZYOby6j8Mq_murKlRy13aKvRPBCVfuXCV3-Kg2E0bcd3zMfV66yhsJpwZRl8HuLsHPCB92TuWEsYWyxNpQ4cxGul1looq8cQFYxeiwES8vZ44",
  desktopThumbs: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCA3fAm9h4zV0TdIgi8-_BlrNfyHquiYCTb2yOZZ_0dJ0iMDjnJ0yYKoEdyjK6DtF0Skfk0SNsyc1EYECGVG9H4jXYT3A_3jxIKp2YG-0mzie6bmPDaE1oSHDkaMIuln_zCt9d9ujvj713c3yKVyIMFRwQRcVB7jrU3fQsiCBTqv3IOzTB0h-Bqp2HTNsk5PZgb74KNxzL6CQ-v2NYdbRzwP_reBg-9Fq7mhS4ATdbs7Ke1ygasb7Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCx_F2ccaa7shnQNyvKEbDEjcHZ0W72HOlPAgu3GGInlCHnawPA8ijYInKi-9lg7Fch9H4fW_9dRpZn8K04IhqwBzw4fR5VHkjcOPRui3oy5ArUaQrd7k-0eBM72z4WeftuIOFKt29lldmeQjTluUQ-RRn1UFcGHgU5LL_Tj3QYPF6CFoLG5bzrmyfuwuJSEvBaAoAI1Z2UaNlu1lJ3l0-g8HEywd7C9hQBmVflozkQoLkO7_imX5A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDNl3iRgYcEr0jLqmLXDTD6ieBhvr39irpQdyqEReJa4Gg_-BIj_Fv8ZOGOJPusGLguafGBcUUJ-A_CSxr5fT6yHQ7ZaWivGMftfu4mhMqdQ_YWCpZlGhwK0IXPtIB4PPQMUc539WaeJgwsG-41aUB0Ke_LC0bfZjoTgXm2qjhdIQPnSqhGiPHmpukcAzTK7xfc8xa2X747IrQvRvhb5y570Gji5xPti5W-BimX-U6E4CZKifjYvVc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQJiOv4-YNWKaQD_KlOexCn3qfAgEc0kVfRIpUGt7sGEE9Q22Ol0yjBvPInPLEcD40eW4a9yGC9MdG32O_igsPBEvm8zoHCkIRQlLcyLDaOZHcHslAJm5ZBmDkggQ94p6iLyxCoL-LosUhZECVfvSq5ipBgaBjc5FQVka_GMUiNMZigRVbNeU8AreRBYqsyd2K1nT4g92B1A8_dxy7J0t6PvJm7b1p07nzIasnQzvFIC4GoANfDMQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC09P7KdK0aS5cUwEkqTnJt5VbCvLVeg-_gIugo2qnJK7mLJno-H5UXKgi8TM9d6mZb3zd79qYUY7fYMPFAC_1rAqPth-RvQxmeT5hi6v1KXljCWijmlKp3qpB6Dh6vD05lqdS5azwkHvG4O-dbv-Fuw8gl4DoGIhioKi5oj7-XgbAB4rxavvrYb8s4ptrlhPoXEheBtGLKFOI0-H9fqggEYk7WTV0GBsmnH5t1GBXhmvNI82y0MF0",
  ],
  mobileSlides: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9JmLPer0xG06vdIlEWFO1lvEWbHI2FP-99JEkXfFoBtUTDEeUtcoUA2Jwe-dOYCE1WBPX1ErApCLbOZYyzBNXM_LJfSOaE_mLxNN1QqsrlQzLXT6P38HkCxYeRpqfI35-pP-8F6XQAwziCTFdsMn45xW8h9P4461fW575hQfW3ojjm2wEWdUEVGlQUry1A8J70C1_AfP25bcEOcWsQIS0YCk8LrhnPsoGdaZgprp-bsOF0KZr1DU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuClcv13AJe8ED5jzm_PpZ76HTLpOcQYbYXCz7AdqAvQpT9YR14KnTd2x0-IzjZp1JM3vZ5d0SOxX4iHdBWHZxrX0oTxF41mYTjccsFQ3Yq1eIF4De41icmSGM232tIhAcJlW-sd3S3G3OEv5vJnHCYsMyzZpPiYyUq7m7mLWS_UtQBc5eeaVoWtXcv1u14bORbN_1dwoRfNmGPUcyM6yVcXE_m9hGgADRhaN9sUfs_FqXx-BjXhhh0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAVTYUHLX0_8WMXKK4u_MOcsE0g8H5Ti7PLGQThzlN2jo6Pgbhgvkeqg5z58hwUplvvdFpuKTTXHgP2wmVckkmuXCi_1u1_mkDAxJlfO58kID-aCgGeyD9lbQpnoXjXbccFDoRvp-2i5au1TUNO0j6yu2pwlmxKT1xWGvk2utka2jSeB26BRfsT6gStrR8SGwsXzQOa6jji-rkl0SC44oKwW1OibUPiY0sjNHjpeYz4iJk_tq9mwPI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA6vQor0y_P_kOXNdqnh8P0J02P-95J3Kv-RpGSiwL_KlQ32hoA_JofEZBDtZRFvabQNU3X7XaRvsQmyYZ7poqCg7azNy7SFH2YworZAoHmlWPK1foGmTIbtNeXTtmKa1nqz1YL9Z5RJ8pVL2UMS9CG07966ayAIJCcf6lQjO621bw0LqZRX26xawx5Acp0rIHBMfJBMraIXnuQWxtFV82mwGwzA3XIct3YmhpWVOA2w--Y13r8K_U",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFP9Fx9C4myTP_0c-L5Y-KyTWOh8POz3DWM0qQpQP8vHChXC4MfRzGTCHtT1UAiW_eemP5gUj_kclcEm_uTDwRRJr8DfX2ZiqT1jsWKEEtOMbDGkr_4qSADbXQSIl1tYlqNt7D4zRG4ILr09Onv6GolT0j8It98a809w5gAoEurGZbNCc0nHKQYStWaEwDOosKQgmjHZfyIEsYtX7ZaST1C8kv6y0IGqv9Y8RdAlaeCbOLwtjr3IY",
  ],
  giftingCirclePhotos: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCI0XITAhSBGBtwlX2fffm2fWghXMPLmu_Bx1o_S5VRYKoVG7ipVKPa7mTz9iE4JkRJsYXfxMDuF1-bzTTp8PxQ7w1LW_Rtq9ZnsNm0SIKJOpdnGjRoIxjaRuBt3xwuX_ETgDFH93PT_CJ18E03Ox6YOCSUgltI0sYCBQcIbtk6aVkQFp0FNHQldwSsQIm_7UBbmYF12dWFsXRepliBPDPiWv5Q7KuD5Eswi4XcuKBbSs9jigakAPU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBwpbXAtSq5Ued8wPtBla9aV8PqHc0SsfkxLCvizDgmuRH7cYzKyQbRIBLHR9m0gjyTZKD0zv3Yp_aJcwHsxCrwayY4QTuKDiyuWGRe9wBDgpH7hHdQRJvp2te-ltCkpjpnBGJHSoVK0iWINnB0iNz3SoMN0K8RCIeML75e3_kYVDCHBQf1zvWkAA-ckV2ESmBzqSHlTCcoHdbjSEuR6AiuvYAF1f8A6sJdmXN6eMquD57WZGQayc8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmtEVfLeL6SZEDbJEhrnxzbb9JPjkyt8DK4YxBKwvtjV6YY63eGeC-VLe_GEIc42-ZTtrQt59HunpTXL1-QTYU9-IV79e1tk-HaBa6DTUitxWhVL6p13LbXPn78NeBkOz9qaKLKCEjHiYMYDOc9bZRmxTlDXcPBaQC8ZTDToHd0TLy-i4_rs7GoYnvz-EeA99TMOOKRcfxIg768vv2ObVqq4-i_on3QQTZNg7nl52riF-MnEnNLM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1wC3TIzpsYYA3D4SKkhsq5tmSYtqxcBN6RD08IUba_xXrP0bp1vP1hDmJbp72Itmis6y9LTxvbgLQM8drWcELB6d6fVxSKhdvzWLmyN3jhc3hh-WkZ73Hlx8n-pcNx9F9WhfPNL8W4aqHVKTz9LtkcuX7eA1TFwcYbaj64lp2Vnmtmd-EXNBd8tdlrvrLe11qrYPgclf6_cxlP9P3MjODMn54rweW3M35unig7HjcvxFIk0tbmlM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcM8hymTjPPA0bM09dFidv-7WcxAIlEvPVU-pc_ohbz_cGW-PifusHDCy3ZhZxFEnh4LZzyMXLOgpSP0ckxLzJvgBzNurFG2YHqhtgtXoL6Ox8CPosCcMpjWlQ6CZdHXFBpAnlky0CiYjnd3xZBhDHvxQMvoLlK_s3PyYGdOnVCRHTY7uyaIdLgP9RgazhXv19ckEBDw8cJOZxh6p1A0s0iZ7Lvt7deiiYoGSpjB7LbkGGsLLO4Nc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6QSzbA-z2BuQyFOEz_SFBM_jyxUySIITtJC7FJRu7lZBXV8am3cEtxOWf44tE1paiowgXDBorYUxkIGhzCvv5PDyEmk8IeH_FhcMB8a6m4dfH36TrJ2vkBVSO3JQsFWeyiFNQ7CIwxMdQCT1HzTmDBlExbP4hK9nv0-cJnVs5hgXPRyRPhg6OWnSyDZ4V4Kl2G_sCDZzNaMTqYhsf9CFXgBO1s0173V6NXE4bvKSAa_ipW0GWVp4",
  ],
};
