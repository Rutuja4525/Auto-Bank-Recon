export const solutionOverview = {
  title: "Yardi Automated Bank Reconciliation",
  subtitle: "Finance Team Productivity & One-Time Investment Solution",
  version: "Enterprise Production Grade",
  vendor: "Yardi Integration Partner",
  description: "Designed for Finance Leadership & Accounting Teams to automate daily bank reconciliation directly inside Yardi Voyager. Replaces manual line-by-line statement matching with automated rules, saving 85+ accounting hours monthly with a 100% one-time implementation investment.",
  keyMetrics: {
    monthlyHoursSaved: "85+ Hours/Mo",
    costModel: "One-Time Investment",
    recurringSaaS: "Zero Subscription Fees",
    matchingRate: 91.45,
    matchedCount: 514,
    unmatchedCount: 48,
    totalProcessed: 562,
    banksSupported: "Multi-Bank Ready",
    cadence: "Daily Automated Intake"
  }
};

export const bankAccountsData = [
  {
    code: "JPMC-OP",
    accountName: "JPMorgan Chase Operating",
    acctNumber: "XXXX-4821",
    currency: "USD",
    glAccount: "1010-00",
    glDescription: "Cash - Primary Operating",
    bankBalance: 1245680.50,
    status: "Reconciled",
    property: "PRP-1004 - Metro Plaza Commercial Portfolio"
  },
  {
    code: "WF-MM",
    accountName: "Wells Fargo Money Market",
    acctNumber: "XXXX-7712",
    currency: "USD",
    glAccount: "1020-00",
    glDescription: "Cash - Treasury Money Market",
    bankBalance: 850310.25,
    status: "Reconciled",
    property: "PRP-1004 - Metro Plaza Commercial Portfolio"
  },
  {
    code: "KEY-ZBA",
    accountName: "KeyBank Payroll ZBA Account",
    acctNumber: "XXXX-3309",
    currency: "USD",
    glAccount: "1030-00",
    glDescription: "Cash - Payroll ZBA Account",
    bankBalance: 412090.00,
    status: "Reconciled",
    property: "PRP-1004 - Metro Plaza Commercial Portfolio"
  },
  {
    code: "CITI-LBX",
    accountName: "Citizens Commercial Lockbox",
    acctNumber: "XXXX-6621",
    currency: "USD",
    glAccount: "1040-00",
    glDescription: "Cash - Tenant Lockbox Operating",
    bankBalance: 920450.75,
    status: "Reconciled",
    property: "PRP-1004 - Metro Plaza Commercial Portfolio"
  }
];

export const matchingRateReport = {
  dateFrom: "09/01/2026",
  dateTo: "09/30/2026",
  property: "PRP-1004 - Metro Plaza Commercial Portfolio",
  overallRate: 91.45,
  totalMatched: 514,
  totalUnmatched: 48,
  rows: [
    { flowCode: 195, description: "Incoming Wire Transfer", unmatched: 3, matched: 24, rate: 88.89 },
    { flowCode: 229, description: "Miscellaneous Credit Interest", unmatched: 0, matched: 8, rate: 100.00 },
    { flowCode: 275, description: "ZBA Lockbox Deposit Credit", unmatched: 0, matched: 182, rate: 100.00 },
    { flowCode: 351, description: "Investment Distribution Sale", unmatched: 1, matched: 12, rate: 92.31 },
    { flowCode: 455, description: "Preauthorized Tenant ACH Debit", unmatched: 12, matched: 145, rate: 92.36 },
    { flowCode: 475, description: "Vendor Check Paid", unmatched: 2, matched: 38, rate: 95.00 },
    { flowCode: 481, description: "Loan Principal & Interest Payment", unmatched: 0, matched: 6, rate: 100.00 },
    { flowCode: 495, description: "Outgoing Wire Transfer", unmatched: 0, matched: 28, rate: 100.00 },
    { flowCode: 529, description: "Miscellaneous Bank Fee Debit", unmatched: 0, matched: 42, rate: 100.00 },
    { flowCode: 575, description: "ZBA Cash Transfer Clearing Debit", unmatched: 28, matched: 24, rate: 46.15 },
    { flowCode: 661, description: "Account Analysis Service Charge", unmatched: 0, matched: 3, rate: 100.00 },
    { flowCode: 698, description: "Miscellaneous Account Fees", unmatched: 0, matched: 2, rate: 100.00 }
  ]
};

export const transactionsData = [
  {
    id: "TXN-2004101",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/01/2026",
    flowCode: 145,
    type: "ACH Tenant Rent Collection",
    amount: 124500.00,
    typeClass: "CR",
    bankRef: "ACH20260901-001",
    custRef: "TEN-8841",
    cleared: true,
    remarks: "Apex Retail Corp LEASE-9041 SUITE-100"
  },
  {
    id: "TXN-2004102",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/01/2026",
    flowCode: 501,
    type: "Automatic Sweep Debit",
    amount: 124500.00,
    typeClass: "DB",
    bankRef: "SWP20260901-002",
    custRef: "SWEEP-OP-01",
    cleared: true,
    remarks: "AUTOMATIC ZBA SWEEP TO CONCENTRATION ACCOUNT #4821"
  },
  {
    id: "TXN-2004103",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/02/2026",
    flowCode: 145,
    type: "ACH Tenant Rent Collection",
    amount: 86320.50,
    typeClass: "CR",
    bankRef: "ACH20260902-005",
    custRef: "TEN-7712",
    cleared: false,
    remarks: "Horizon Global Tech SUITE-400 (Pending Remittance Review)"
  },
  {
    id: "TXN-2004104",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Maintenance Fee",
    amount: 14850.00,
    typeClass: "CR",
    bankRef: "ACH20260903-012",
    custRef: "TEN-6601",
    cleared: true,
    remarks: "CAM RECONCILIATION PAYMENT Beacon Health Systems"
  },
  {
    id: "TXN-2004105",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Unidentified Credit",
    amount: 38400.00,
    typeClass: "CR",
    bankRef: "ACH20260903-099",
    custRef: "PENDING-REF",
    cleared: false,
    remarks: "WIRE TRANSFER PENDING REMITTANCE MATCHING REVIEW"
  },
  {
    id: "TXN-2004106",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/04/2026",
    flowCode: 455,
    type: "Vendor ACH Payment",
    amount: 52190.25,
    typeClass: "DB",
    bankRef: "ACH20260904-033",
    custRef: "VND-4401",
    cleared: true,
    remarks: "VENDOR PAYMENT Metro Utility Corp INV-88219"
  },
  {
    id: "TXN-2004107",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/05/2026",
    flowCode: 145,
    type: "ACH Tenant Rent Collection",
    amount: 64200.00,
    typeClass: "CR",
    bankRef: "ACH20260905-044",
    custRef: "TEN-5510",
    cleared: false,
    remarks: "Vanguard Logistics DOCK-12 (Awaiting Manual Match)"
  },
  {
    id: "TXN-2004108",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/05/2026",
    flowCode: 501,
    type: "Automatic Sweep Debit",
    amount: 64200.00,
    typeClass: "DB",
    bankRef: "SWP20260905-045",
    custRef: "SWEEP-OP-01",
    cleared: true,
    remarks: "AUTOMATIC ZBA SWEEP TO CONCENTRATION ACCOUNT #4821"
  },
  {
    id: "TXN-2004109",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/08/2026",
    flowCode: 145,
    type: "ACH Security Deposit",
    amount: 25000.00,
    typeClass: "CR",
    bankRef: "ACH20260908-011",
    custRef: "TEN-9902",
    cleared: false,
    remarks: "NEW TENANT SECURITY DEPOSIT Summit Tech Labs (Pending GL Coding)"
  },
  {
    id: "TXN-2004110",
    bankCode: "CITI-LBX",
    bankAcctName: "Citizens Commercial Lockbox",
    date: "09/09/2026",
    flowCode: 698,
    type: "Bank Service Charge",
    amount: 450.00,
    typeClass: "DB",
    bankRef: "FEE20260909-001",
    custRef: "BANK-FEE",
    cleared: true,
    remarks: "MONTHLY ACCOUNT ANALYSIS FEE AUTOMATED GL BOOKING"
  }
];

export const fileLogsData = [
  { id: "LOG-0901-01", bank: "JPMorgan Chase", fileName: "SFTP_JPMC_BANKFEED_20260901.TRU", records: 240, date: "09/01/2026 08:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-02", bank: "Wells Fargo", fileName: "SFTP_WF_BANKFEED_20260901.TRU", records: 115, date: "09/01/2026 08:30 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-03", bank: "KeyBank", fileName: "SFTP_KEY_BANKFEED_20260901.TRU", records: 88, date: "09/01/2026 09:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-04", bank: "Citizens Commercial", fileName: "SFTP_CITI_BANKFEED_20260901.TRU", records: 320, date: "09/01/2026 09:30 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-05", bank: "Bank of America", fileName: "SFTP_BOA_BANKFEED_20260901.TRU", records: 194, date: "09/01/2026 10:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-06", bank: "PNC Bank", fileName: "SFTP_PNC_BANKFEED_20260901.TRU", records: 76, date: "09/01/2026 10:30 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0902-01", bank: "US Bank", fileName: "SFTP_USB_BANKFEED_20260902.TRU", records: 142, date: "09/02/2026 08:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0902-02", bank: "Capital One", fileName: "SFTP_CAP1_BANKFEED_20260902.TRU", records: 64, date: "09/02/2026 08:30 AM", status: "Success", errorCount: 0 }
];

export const implementationRoadmap = [
  { step: 1, title: "Connectivity & Test Feed Setup", desc: "Establish secure SFTP credentials and obtain sample statement test feeds (BAI2, MT940, CAMT53)." },
  { step: 2, title: "Package Deployment", desc: "One-click deployment completed directly on our side within just 2 hours." },
  { step: 3, title: "User Acceptance & Production Go-Live", desc: "End-to-end reconciliation validation, finance team walkthrough, and full production go-live." }
];
