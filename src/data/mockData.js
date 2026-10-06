export const solutionOverview = {
  title: "Yardi Automated Bank Reconciliation",
  subtitle: "End-to-End BAI2 / CAMT53 Intake, High-Speed Matching & Yardi Voyager Clearing Automation",
  version: "v4.2 - Production Enterprise Grade",
  vendor: "Fenix Consulting & Yardi Technical Integration",
  description: "Automates daily bank file retrieval (BAI2/MT940/CAMT53), normalizes statements across 12+ major financial institutions, executes configurable multi-level matching algorithms in Yardi Voyager, auto-clears ledger transactions, and posts automated interest/fee journal entries.",
  keyMetrics: {
    matchingRate: 88.61,
    matchedCount: 467,
    unmatchedCount: 60,
    totalProcessed: 527,
    banksSupported: "12+ Major Banks",
    cadence: "Daily Automated SFTP Intake"
  }
};

export const bankAccountsData = [
  {
    code: "Citizens",
    accountName: "Citizens Fund III",
    acctNumber: "24969664",
    currency: "USD",
    glAccount: "11001250",
    glDescription: "Cash - Money Market",
    bankBalance: 421647.61,
    status: "Reconciled",
    property: "fivf31p - Faropoint Indus Value Fund III"
  },
  {
    code: "f3jpmzba",
    accountName: "JPM ZBA - Fund 111",
    acctNumber: "851380599",
    currency: "USD",
    glAccount: "11001850",
    glDescription: "Cash - Fund Level JPM",
    bankBalance: 309873.53,
    status: "Reconciled",
    property: "fivf31p - Faropoint Indus Value Fund III"
  },
  {
    code: "f3keyzba",
    accountName: "KeyBank ZBA Fund 111",
    acctNumber: "359681705372",
    currency: "USD",
    glAccount: "11001860",
    glDescription: "Cash - KeyBank ZBA",
    bankBalance: 609435.31,
    status: "Reconciled",
    property: "fivf31p - Faropoint Indus Value Fund III"
  },
  {
    code: "fivf31p",
    accountName: "Faropoint Indus Value Fund III",
    acctNumber: "359681663720",
    currency: "USD",
    glAccount: "11001350",
    glDescription: "Cash - Fund/Feeder Level Operating (Equity)",
    bankBalance: 703812.88,
    status: "Reconciled",
    property: "fivf31p - Faropoint Indus Value Fund III"
  }
];

export const matchingRateReport = {
  dateFrom: "09/01/2026",
  dateTo: "09/30/2026",
  property: "fivf31p - Faropoint Indus Value Fund III",
  overallRate: 88.61,
  totalMatched: 467,
  totalUnmatched: 60,
  rows: [
    { flowCode: 195, description: "Incoming Money Transfer", unmatched: 8, matched: 11, rate: 57.89 },
    { flowCode: 229, description: "Miscellaneous International Credit", unmatched: 0, matched: 3, rate: 100.00 },
    { flowCode: 275, description: "ZBA Credit", unmatched: 0, matched: 134, rate: 100.00 },
    { flowCode: 351, description: "Individual Investment Sold", unmatched: 2, matched: 7, rate: 77.78 },
    { flowCode: 455, description: "Preauthorized ACH Debit", unmatched: 2, matched: 1, rate: 33.33 },
    { flowCode: 475, description: "Check Paid", unmatched: 0, matched: 1, rate: 100.00 },
    { flowCode: 481, description: "Individual Loan Payment", unmatched: 0, matched: 3, rate: 100.00 },
    { flowCode: 495, description: "Outgoing Money Transfer", unmatched: 0, matched: 18, rate: 100.00 },
    { flowCode: 508, description: "Individual Int'l Money Transfer Debits", unmatched: 1, matched: 0, rate: 0.00 },
    { flowCode: 529, description: "Miscellaneous International Debit", unmatched: 0, matched: 151, rate: 100.00 },
    { flowCode: 575, description: "ZBA Debit", unmatched: 40, matched: 127, rate: 76.05 },
    { flowCode: 577, description: "ZBA Debit Transfer", unmatched: 7, matched: 5, rate: 41.67 },
    { flowCode: 651, description: "Individual Investment Purchased", unmatched: 0, matched: 1, rate: 100.00 },
    { flowCode: 661, description: "Account Analysis Fee", unmatched: 0, matched: 2, rate: 100.00 },
    { flowCode: 698, description: "Miscellaneous Fees", unmatched: 0, matched: 2, rate: 100.00 },
    { flowCode: 760, description: "Loan Disbursement", unmatched: 0, matched: 1, rate: 100.00 }
  ]
};

export const transactionsData = [
  {
    id: "1112196",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/01/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 46918.45,
    typeClass: "CR",
    bankRef: "A26243025177420",
    custRef: "2452",
    cleared: false,
    remarks: "05=CUST REF=2452 ORIG CO NAME=SOLSTICE SLEEP ORIG CO ID=9718801005 CO ENTRY DESC=CORP PAY TRACE NO=04100"
  },
  {
    id: "1112211",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/01/2026",
    flowCode: 501,
    type: "Automatic Transfer Debit",
    amount: 46918.45,
    typeClass: "DB",
    bankRef: "A26246007669508",
    custRef: "00002800860542",
    cleared: false,
    remarks: "05=TRANSFER TO 7057548724, Funds Type-Z LP LOCKBOX"
  },
  {
    id: "1123865",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 552169.95,
    typeClass: "CR",
    bankRef: "A2624600766950f",
    custRef: "000027936333702",
    cleared: true,
    remarks: "05=CUST REF=000027936333702 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709 CO ENTRY DESC=SettlementT"
  },
  {
    id: "1123881",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 191811.87,
    typeClass: "CR",
    bankRef: "A262460076695071",
    custRef: "000028008450582",
    cleared: true,
    remarks: "05=CUST REF=000028008450582 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709 CO ENTRY DESC=SettlementT"
  },
  {
    id: "1123897",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 191347.84,
    typeClass: "CR",
    bankRef: "A26247001",
    custRef: "-",
    cleared: false,
    remarks: "05=TRANSFER TO 7057548724, Funds Type-Z LP LOCKBOX"
  },
  {
    id: "1123913",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 61807.35,
    typeClass: "CR",
    bankRef: "A262510164194291",
    custRef: "0000280550055421",
    cleared: true,
    remarks: "05=CUST REF=0000280550055420 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709"
  },
  {
    id: "1123929",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 53648.65,
    typeClass: "CR",
    bankRef: "A262510079302791",
    custRef: "000028037316602",
    cleared: true,
    remarks: "05=CUST REF=0000280373166020 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709"
  },
  {
    id: "1123945",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 44567.98,
    typeClass: "CR",
    bankRef: "A26257006866396",
    custRef: "000028092101158",
    cleared: true,
    remarks: "05=CUST REF=0000280921011580 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709"
  },
  {
    id: "1123961",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 42496.81,
    typeClass: "CR",
    bankRef: "A26258001458972",
    custRef: "000028106572266",
    cleared: true,
    remarks: "05=CUST REF=0000281065722660 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709"
  },
  {
    id: "1123977",
    bankCode: "f2c08727",
    bankAcctName: "KUSH-KUSH, LP LOCKBOX",
    date: "09/03/2026",
    flowCode: 145,
    type: "ACH Concentration Credit",
    amount: 21101.06,
    typeClass: "CR",
    bankRef: "A26266002662896",
    custRef: "000028162205498",
    cleared: true,
    remarks: "05=CUST REF=0000281622054980 ORIG CO NAME=FAROP01NT-F2C087 ORIG CO ID=9000326709"
  }
];

export const fileLogsData = [
  { id: "LOG-0901-01", bank: "Truist Bank", fileName: "SFTPbaist 950FAROP01NT.TRUIST PD P.S20260901110006", records: 124, date: "09/01/2026 11:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-02", bank: "Capital One", fileName: "SFTPbaist 205FAROP01NT.CAPITALONE PD.S20260901080007", records: 57, date: "09/01/2026 08:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-03", bank: "Pinnacle Bank", fileName: "SFTPbaist 509FAROP01NT.PINNACLE PD.S20260901090005", records: 100, date: "09/01/2026 09:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-04", bank: "Western Alliance (WAB)", fileName: "SFTPbaist 835FAROP01NT.WAB PD.S20260901100014", records: 23, date: "09/01/2026 10:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-05", bank: "JPMorgan Chase", fileName: "SFTPbaist 916FAROP01NT.JPMC PD.S20260901084040", records: 686, date: "09/01/2026 08:40 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-06", bank: "Synovus Bank", fileName: "SFTPbaist 921FAROP01NT.SYNOVUS PD.S20260901072008", records: 18, date: "09/01/2026 07:20 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-07", bank: "Citizens Bank", fileName: "SFTPbaist 938FAROP01NT.CITIZENS PD.S20260901110004", records: 840, date: "09/01/2026 11:00 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-08", bank: "KeyBank", fileName: "SFTPbaist 625FAROP01NT.KEYBANK PD P.S20260901093006", records: 2961, date: "09/01/2026 09:30 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-09", bank: "Bank of Hawaii (BH1)", fileName: "SFTPbaist 716FAROP01NT.BH1 PD.S20260901095109", records: 11, date: "09/01/2026 09:51 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0901-10", bank: "PNC Bank", fileName: "SFTPbaist 313FAROP01NT.PNC PD.S20260901101036", records: 23, date: "09/01/2026 10:10 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0903-01", bank: "Renasant Bank", fileName: "SFTPbaist 680FAROP01NT.RENASANT PD.S20260903112152", records: 1129, date: "09/03/2026 11:21 AM", status: "Success", errorCount: 0 },
  { id: "LOG-0904-01", bank: "US Bank", fileName: "SFTPbaist 655FAROP01NT.USBANK PD P.S20260904105015", records: 820, date: "09/04/2026 10:50 AM", status: "Success", errorCount: 0 }
];

export const screenshotsGallery = [
  {
    id: 1,
    title: "Bank Reconciliation Launcher Screen (brecs)",
    file: "/screenshots/image1.png",
    description: "New multi-bank Yardi launcher page showing property Selection, bank accounts, GL cash accounts, and live bank balances auto-populated.",
    keyPoints: [
      "Auto-populates statement balances from BAI2 feeds",
      "One-click multi-bank report generation & email triggers",
      "Direct integration with Yardi Voyager General Ledger"
    ]
  },
  {
    id: 2,
    title: "Bank Reconciliation Matching Rate Report (brec_mrr)",
    file: "/screenshots/image2.png",
    description: "Executive matching analytics broken down by BAI2 Flow Code (195 to 760), displaying matched vs unmatched counts and matching percentages.",
    keyPoints: [
      "Achieved 88.61% overall automatic matching rate across 527 transactions",
      "100.00% matching on ZBA Credits, Outgoing Wires, & International Debits",
      "Drill-down exception tracking for unmatched items"
    ]
  },
  {
    id: 3,
    title: "List Bank Transactions Filter Interface (ShowBAI2Txns)",
    file: "/screenshots/image3.png",
    description: "Yardi query filter screen allowing accounting users to inspect cleared and uncleared transactions by bank code, property, and date range.",
    keyPoints: [
      "Filter by specific Lockbox or Operating bank codes (e.g. f2c08727)",
      "Supports cleared vs uncleared transaction view toggles",
      "Custom SQL script versioning (rs_sql_cc ShowBA12Txns.txt)"
    ]
  },
  {
    id: 4,
    title: "Imported Bank Transactions & Clearing Grid",
    file: "/screenshots/image4.png",
    description: "Detailed transaction ledger displaying imported ACH Concentration Credits and Automatic Transfer Debits with bank reference IDs and Yardi clearing flags.",
    keyPoints: [
      "Full transparency on BAI2 bank references (e.g., A26243025177420)",
      "Automatic clearing indicator ('Y' flag) when matching criteria are met",
      "Complete customer reference and remittance text parsing"
    ]
  },
  {
    id: 5,
    title: "BAI2 Files Intake Log Filter (BA12FilesLog)",
    file: "/screenshots/image5.png",
    description: "Monitoring utility parameter screen to review daily automated SFTP file downloads and intake status across connected banking institutions.",
    keyPoints: [
      "Tracks scheduled SFTP downloads from banks and Kyriba",
      "Version controlled integration script (rs_sql_fnx BA12FilesLog.txt)",
      "Supports single date or date range audit queries"
    ]
  },
  {
    id: 6,
    title: "Multi-Bank BAI2 File Download & Execution Audit Log",
    file: "/screenshots/image6.png",
    description: "Comprehensive daily file intake log covering 12+ major financial institutions (Truist, Capital One, Pinnacle, JPMC, KeyBank, US Bank, etc.).",
    keyPoints: [
      "Automated timestamp logging for each SFTP bank feed",
      "Record count metrics and intake volume tracking",
      "Disruption alerting if expected daily bank files are delayed"
    ]
  },
  {
    id: 7,
    title: "Bank Balances with GL Account Reconciliation Report",
    file: "/screenshots/image7.png",
    description: "Final variance check utility matching imported statement closing balances directly against Yardi GL Cash Account balances as of date.",
    keyPoints: [
      "Automated balance comparison eliminating manual GL lookups",
      "Supports property and entity level consolidations",
      "Fenix Group SQL utility (rs_sql bank balancesGL3A12.txt)"
    ]
  }
];

export const implementationRoadmap = [
  { step: 1, title: "Connectivity & Test Feed Setup", desc: "Confirm bank/Kyriba SFTP credentials and obtain sample BAI2/CAMT53 test files." },
  { step: 2, title: "Package Deployment", desc: "Deploy Package Manager packages (ImportBAI task, BAI2 lookup, correspondence templates)." },
  { step: 3, title: "Database & Group Config", desc: "Configure foreign database structures and security groups (BAI2, BAI2LOG, BAI2JE)." },
  { step: 4, title: "File Server Setup", desc: "Create standardized directory hierarchy: \\Interfaces\\Bank\\BAI2, BAI2Logs, JE, Scripts." },
  { step: 5, title: "Custom Report Registration", desc: "Copy report files to Yardi reports folder and grant user group launcher privileges." },
  { step: 6, title: "Service Manager DLL Registration", desc: "Coordinate with Yardi support to deploy ASPX pages and MultipleFiles yExport DLL." },
  { step: 7, title: "Yardi Menu Linking", desc: "Add launcher links: Bank Rec Launcher, List Transactions, Matching Rate Report, File Logs." },
  { step: 8, title: "Script Tailoring & AppTask Registration", desc: "Customize PowerShell (.ps1) and Batch (.bat) scripts and register in AppTask DLL path." },
  { step: 9, title: "GL Journal Rules & Testing", desc: "Define GL coding for auto-booking interest income and bank service charges." },
  { step: 10, title: "User Acceptance & Production Go-Live", desc: "Execute end-to-end dry run, validate matching rates, and initiate daily automated cadence." }
];
