// Chart data
export interface ChartType {
    chart?: any;
    plotOptions?: any;
    colors?: any;
    series?: any;
    fill?: any;
    dataLabels?: any;
    legend?: any;
    xaxis?: any;
    stroke?: any;
    labels?: any;
}
export interface Transaction {
    id: string;
    name: string;
    date: string;
    total: string;
    status: string;
    payment: [string, string]; // Tuple containing icon class and payment method name
    index: number;
  }
  
  export interface StatData {
    icon: string;
    title: string;
    value: string;
  }
  
  export interface SassEarning {
    name: string;
    amount: string;
    revenue: string;
    time: string;
    month: string;
    previousamount: string;
    series: { name: string, data: number[] }[];
  }
  
  export interface SassTopSellingItem {
    name: string;
    text: string;
    sales: number;
    chartVariant: string;
  }
  
  export interface SassTopSelling {
    title: string;
    amount: string;
    revenue: string;
    list: SassTopSellingItem[];
  }
  
  export interface CryptoWalletBalanceItem {
    text: string;
    coin: string;
    amount: string;
  }
  
  export interface CryptoWalletBalance {
    text: string;
    amount: string;
    subamount: string;
    income: string;
    expense: string;
    chartSeries: number[];
    balancelist: CryptoWalletBalanceItem[];
  }
  
  export interface DataDefault {
    transactions: Transaction[];
    statData: StatData[];
    sassEarning: SassEarning[];
    sassTopSelling: SassTopSelling[];
    cryptoWalletBalance: CryptoWalletBalance[];
  }
  


