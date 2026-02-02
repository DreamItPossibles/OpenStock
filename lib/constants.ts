export const NAV_ITEMS = [
    { href: '/', label: 'dashboard', key: 'dashboard' },
    { href: '/search', label: 'search', key: 'search' },
    { href: '/watchlist', label: 'watchlist', key: 'watchlist' },
    { href: '/api-docs', label: 'apiDocs', key: 'apiDocs' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts (Investing.com / 英伟财情 Style)
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark',
    dateRange: '12M',
    locale: 'zh_CN',
    isTransparent: true,
    showFloatingTooltip: true,
    tabs: [
        {
            title: '股指期货',
            symbols: [
                { s: 'OANDA:SPX500USD', d: '标普 500' },
                { s: 'OANDA:NAS100USD', d: '纳斯达克 100' },
                { s: 'OANDA:US30USD', d: '道琼斯 30' },
                { s: 'FOREXCOM:CHINA50', d: '中国 A50' },
                { s: 'INDEX:HSI', d: '恒生指数' },
                { s: 'INDEX:DAX', d: '德国 DAX 40' },
                { s: 'FOREXCOM:JP225', d: '日经 225' },
                { s: 'FOREXCOM:UK100', d: '富时 100' },
            ],
        },
        {
            title: '大宗商品',
            symbols: [
                { s: 'OANDA:XAUUSD', d: '黄金' },
                { s: 'TVC:USOIL', d: '原油' },
                { s: 'OANDA:XAGUSD', d: '白银' },
                { s: 'OANDA:XCUUSD', d: '期铜' },
                { s: 'OANDA:NATGASUSD', d: '天然气' },
                { s: 'OANDA:SOYBNUSD', d: '大豆' },
                { s: 'OANDA:CORNUSD', d: '玉米' },
                { s: 'OANDA:WHEATUSD', d: '小麦' },
            ],
        },
        {
            title: '外汇',
            symbols: [
                { s: 'TVC:DXY', d: '美元指数' },
                { s: 'FX_IDC:USDCNH', d: '离岸人民币' },
                { s: 'FX:EURUSD', d: '欧元/美元' },
                { s: 'FX:USDJPY', d: '美元/日元' },
                { s: 'FX:GBPUSD', d: '英镑/美元' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com',
    backgroundColor: '#141414',
    width: '100%',
    height: 600,
    showSymbolLogo: true,
    showChart: true,
};

// 英伟财情风格的技术分析汇总 (Technical Summary)
export const TECHNICAL_SUMMARY_CONFIG = {
    interval: "1h",
    width: "100%",
    isTransparent: true,
    height: 600,
    symbol: "AMEX:SPY",
    showIntervalTabs: true,
    displayMode: "single",
    locale: "zh_CN",
    colorTheme: "dark"
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'AllWorld',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'zh_CN',
    symbolUrl: '',
    colorTheme: 'dark',
    hasTopBar: true,
    isDataSetEnabled: true,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'zh_CN',
    market: 'all', 
    width: '100%',
    height: 600,
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: '全球市场快照',
    width: '100%',
    height: 800,
    locale: 'zh_CN',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: '主要指数',
            symbols: [
                { name: 'FOREXCOM:SPX500', displayName: '标普 500' },
                { name: 'FOREXCOM:NSXUSD', displayName: '纳斯达克 100' },
                { name: 'FOREXCOM:CHINA50', displayName: '中国 A50' },
                { name: 'INDEX:HSI', displayName: '恒生指数' },
                { name: 'INDEX:DAX', displayName: '德国 DAX 40' },
                { name: 'TVC:DXY', displayName: '美元指数' },
            ],
        },
        {
            name: '能源与金属',
            symbols: [
                { name: 'TVC:USOIL', displayName: 'WTI 原油' },
                { name: 'TVC:UKOIL', displayName: '布伦特原油' },
                { name: 'OANDA:XAUUSD', displayName: '黄金' },
                { name: 'OANDA:XAGUSD', displayName: '白银' },
                { name: 'FOREXCOM:COPPER', displayName: '期铜' },
                { name: 'OANDA:XPDUSD', displayName: '钯金' },
                { name: 'OANDA:XPTUSD', displayName: '铂金' },
            ],
        },
        {
            name: '农产品',
            symbols: [
                { name: 'OANDA:SOYBNUSD', displayName: '大豆' },
                { name: 'OANDA:CORNUSD', displayName: '玉米' },
                { name: 'OANDA:WHEATUSD', displayName: '小麦' },
                { name: 'OANDA:SUGARUSD', displayName: '白糖' },
                { name: 'TVC:COFFEE', displayName: '咖啡' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'zh_CN',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'zh_CN',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'zh_CN',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'zh_CN',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'zh_CN',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'zh_CN',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    // --- Global Index Futures (Proxied by Indices in Finnhub) ---
    '^GSPC',     // S&P 500 Index
    '^NDX',      // Nasdaq 100 Index
    '^DJI',      // Dow Jones Industrial Average
    '^RUT',      // Russell 2000 Index
    '^VIX',      // CBOE Volatility Index
    
    // --- European & Asian Major Indices ---
    '^GDAXI',    // DAX Performance-Index (Germany)
    '^FTSE',     // FTSE 100 Index (UK)
    '^FCHI',     // CAC 40 Index (France)
    '^N225',     // Nikkei 225 (Japan)
    '^HSI',      // Hang Seng Index (Hong Kong)
    '^STI',      // Straits Times Index (Singapore)
    '^AXJO',     // S&P/ASX 200 (Australia)
    
    // --- Commodity Futures (Finnhub supported) ---
    'CL=F',      // Crude Oil Futures
    'GC=F',      // Gold Futures
    'SI=F',      // Silver Futures
    'NG=F',      // Natural Gas Futures
    
    // --- Major Market Leaders (For context) ---
    'BTCUSD',    // Bitcoin
    'ETHUSD',    // Ethereum
    'USO',       // US Oil Fund
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Category',
    'Symbol',
    'Price',
    'Change',
    'Day High',
    'Day Low',
    'Alert',
    'Action',
];
