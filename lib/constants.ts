export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
    { href: '/api-docs', label: 'API Docs' },
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
    locale: 'en',
    isTransparent: true,
    showFloatingTooltip: true,
    tabs: [
        {
            title: 'Index Futures',
            symbols: [
                { s: 'FOREXCOM:SPX500', d: 'S&P 500' },
                { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq 100' },
                { s: 'FOREXCOM:DJI', d: 'Dow 30' },
                { s: 'FOREXCOM:CHINA50', d: 'China A50' }, // 修复感叹号：改用 FOREXCOM 兼容代码
                { s: 'INDEX:HSI', d: 'Hang Seng' },
                { s: 'INDEX:DAX', d: 'DAX 40' },
                { s: 'INDEX:N225', d: 'Nikkei 225' },
                { s: 'INDEX:FTSE', d: 'FTSE 100' },
            ],
        },
        {
            title: 'Commodities',
            symbols: [
                { s: 'OANDA:XAUUSD', d: 'Gold' },
                { s: 'TVC:USOIL', d: 'Crude Oil' },
                { s: 'OANDA:XAGUSD', d: 'Silver' },
                { s: 'OANDA:XCUUSD', d: 'Copper' },
                { s: 'OANDA:NATGASUSD', d: 'Natural Gas' },
                { s: 'OANDA:SOYBNUSD', d: 'Soybeans' }, // 更换为更兼容的符号
                { s: 'FOREXCOM:CORN', d: 'Corn' },
                { s: 'FOREXCOM:WHEAT', d: 'Wheat' },
            ],
        },
        {
            title: 'Currencies',
            symbols: [
                { s: 'TVC:DXY', d: 'Dollar Index' },
                { s: 'FX_IDC:USDCNH', d: 'USD/CNH' },
                { s: 'FX:EURUSD', d: 'EUR/USD' },
                { s: 'FX:USDJPY', d: 'USD/JPY' },
                { s: 'FX:GBPUSD', d: 'GBP/USD' },
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
    symbols: [
        ["S&P 500", "FOREXCOM:SPX500"],
        ["Nasdaq 100", "FOREXCOM:NSXUSD"],
        ["China A50", "FOREXCOM:CHINA50"],
        ["Gold", "OANDA:XAUUSD"],
        ["Crude Oil", "TVC:USOIL"],
        ["Bitcoin", "TVC:BTCUSD"]
    ],
    showIntervalTabs: true,
    displayMode: "single",
    locale: "en",
    colorTheme: "dark",
    isTransparent: true,
    width: "100%",
    height: 400
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'AllWorld',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
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
    locale: 'en',
    market: 'futures', // 切换为期货消息
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Global Market Snapshot',
    width: '100%',
    height: 800, // 增加高度以展示更多商品
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Key Indices',
            symbols: [
                { name: 'FOREXCOM:SPX500', displayName: 'S&P 500' },
                { name: 'FOREXCOM:NSXUSD', displayName: 'Nasdaq 100' },
                { name: 'FOREXCOM:CHINA50', displayName: 'China A50' },
                { name: 'INDEX:HSI', displayName: 'Hang Seng' },
                { name: 'INDEX:DAX', displayName: 'DAX 40' },
                { name: 'TVC:DXY', displayName: 'Dollar Index' },
            ],
        },
        {
            name: 'Energy & Metals',
            symbols: [
                { name: 'TVC:USOIL', displayName: 'WTI Crude' },
                { name: 'TVC:UKOIL', displayName: 'Brent Oil' },
                { name: 'OANDA:XAUUSD', displayName: 'Gold' },
                { name: 'OANDA:XAGUSD', displayName: 'Silver' },
                { name: 'FOREXCOM:COPPER', displayName: 'Copper' },
            ],
        },
        {
            name: 'Agriculture',
            symbols: [
                { name: 'OANDA:SOYBNUSD', displayName: 'Soybeans' },
                { name: 'FOREXCOM:CORN', displayName: 'Corn' },
                { name: 'FOREXCOM:WHEAT', displayName: 'Wheat' },
                { name: 'FOREXCOM:COTTON', displayName: 'Cotton' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
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
    locale: 'en',
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
    locale: 'en',
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
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
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
    'AAPL',      // Apple
    'NVDA',      // NVIDIA
    'TSLA',      // Tesla
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
