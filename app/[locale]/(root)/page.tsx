import TradingViewWidget from "@/components/TradingViewWidget";
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
    TECHNICAL_SUMMARY_CONFIG
} from "@/lib/constants";
import {sendDailyNewsSummary} from "@/lib/inngest/functions";

import {useTranslations} from 'next-intl';

const Home = () => {
    const t = useTranslations('Dashboard');
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                {/* 第一行：三个组件各占 1/3 宽度 */}
                <div className="xl:col-span-1">
                    <TradingViewWidget
                        title={t('globalMarketOverview')}
                        scriptUrl={`${scriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
                <div className="xl:col-span-1">
                    <TradingViewWidget
                        title={t('technicalSummary')}
                        scriptUrl={`${scriptUrl}technical-analysis.js`}
                        config={TECHNICAL_SUMMARY_CONFIG}
                        height={600}
                    />
                </div>
                <div className="xl:col-span-1">
                    <TradingViewWidget
                        title={t('topStories')}
                        scriptUrl={`${scriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

                {/* 第二行：市场快照占据全宽 */}
                <div className="xl:col-span-3">
                    <TradingViewWidget
                        title={t('marketSnapshot')}
                        scriptUrl={`${scriptUrl}market-quotes.js`}
                        config={MARKET_DATA_WIDGET_CONFIG}
                        height={600}
                    />
                </div>

                {/* 第三行：热力图占据全宽 */}
                <div className="xl:col-span-3">
                    <TradingViewWidget
                        title={t('marketHeatmap')}
                        scriptUrl={`${scriptUrl}stock-heatmap.js`}
                        config={HEATMAP_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
        </div>
    )
}

export default Home;