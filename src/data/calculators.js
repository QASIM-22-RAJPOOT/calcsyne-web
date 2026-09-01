export const calculators = [
  {
    slug: 'percentage',
    name: 'Percentage Calculator',
    shortName: 'Percentage',
    icon: '%',
    category: 'Math',
    description: 'Calculate percentages, percentage change, and find what percent one number is of another.',
    title: 'Percentage Calculator - Calculate Percentages Instantly',
    metaDescription: 'Free percentage calculator for percentage of a number, percent change, and what percent one value is of another. Fast and easy to use.',
    intro: 'Percentages appear everywhere: discounts, exam scores, business growth, taxes, tips, and everyday comparisons. This calculator gives you three common percentage tools in one place so you can get an answer without rearranging formulas by hand.',
    formula: 'Percentage of a number = (percentage ÷ 100) × number. Percentage change = ((new − old) ÷ old) × 100.',
    example: 'To find 20% of 15,000, calculate 0.20 × 15,000 = 3,000.',
    faqs: [
      ['How do I calculate 10% quickly?', 'Divide the number by 10. For example, 10% of 450 is 45.'],
      ['Can a percentage be greater than 100%?', 'Yes. A value can be more than 100% when it is larger than the reference or original value.'],
      ['What is the difference between percentage and percentage points?', 'Percentage points measure the direct difference between two percentages, while percent change measures the relative change.']
    ]
  },
  {
    slug: 'age', name: 'Age Calculator', shortName: 'Age', icon: '🎂', category: 'Everyday',
    description: 'Find your exact age in years, months, and days from a date of birth.',
    title: 'Age Calculator - Exact Age in Years, Months & Days',
    metaDescription: 'Calculate exact age from date of birth in years, months and days. Free online age calculator with next birthday information.',
    intro: 'The age calculator compares a date of birth with a selected date and returns the elapsed calendar time. It is useful for forms, eligibility checks, birthdays, school records, and any situation where an exact age matters.',
    formula: 'Exact age is calculated as the calendar difference between the birth date and the selected reference date, adjusting for month lengths and leap years.',
    example: 'If a person was born on 15 March 2000, the calculator counts full years first, then remaining months and days up to the selected date.',
    faqs: [['Does the calculator account for leap years?', 'Yes. It uses real calendar dates, including leap years and different month lengths.'], ['Can I calculate age on a past date?', 'Yes. Choose any reference date that is on or after the birth date.'], ['Why can two people born in the same year have different ages?', 'Age depends on whether each person has already had their birthday in the reference year.']]
  },
  {
    slug: 'bmi', name: 'BMI Calculator', shortName: 'BMI', icon: '⚖️', category: 'Health',
    description: 'Estimate body mass index using metric or imperial measurements.',
    title: 'BMI Calculator - Body Mass Index Calculator',
    metaDescription: 'Free BMI calculator using metric or imperial units. Estimate body mass index and view the standard adult BMI category range.',
    intro: 'Body mass index (BMI) is a simple screening measure based on height and weight. It can be useful for broad population-level comparisons, but it does not directly measure body fat, fitness, or overall health.',
    formula: 'Metric BMI = weight (kg) ÷ height² (m). Imperial BMI = 703 × weight (lb) ÷ height² (in).',
    example: 'A person who weighs 70 kg and is 1.75 m tall has a BMI of about 22.9.',
    faqs: [['Is BMI a medical diagnosis?', 'No. BMI is a screening measure and should not be treated as a diagnosis.'], ['Does BMI work the same for everyone?', 'No. Age, muscle mass, pregnancy, and other factors can affect how BMI should be interpreted.'], ['What units can I use?', 'This calculator supports kilograms/centimeters and pounds/feet/inches.']]
  },
  {
    slug: 'discount', name: 'Discount Calculator', shortName: 'Discount', icon: '🏷️', category: 'Money',
    description: 'Find sale price, money saved, and discount percentage in seconds.',
    title: 'Discount Calculator - Sale Price & Savings',
    metaDescription: 'Calculate discount price, savings amount and final sale price. Enter the original price and discount percentage for an instant result.',
    intro: 'A discount calculator helps you compare sale offers without mental math. Enter the original price and discount rate to see both the amount saved and the final price before any additional taxes or fees.',
    formula: 'Savings = original price × discount ÷ 100. Sale price = original price − savings.',
    example: 'A 25% discount on 8,000 saves 2,000, making the sale price 6,000.',
    faqs: [['Does this include tax?', 'No. The result is the discounted price before tax unless you add tax separately.'], ['How do I calculate multiple discounts?', 'Apply each discount one after another; two discounts do not simply add together.'], ['What does 50% off mean?', 'It means you pay half of the original price.']]
  },
  {
    slug: 'loan', name: 'Loan / EMI Calculator', shortName: 'Loan / EMI', icon: '💳', category: 'Finance',
    description: 'Estimate monthly loan payments, total payment, and total interest.',
    title: 'Loan EMI Calculator - Monthly Payment & Interest',
    metaDescription: 'Estimate monthly loan or EMI payments, total repayment and total interest using principal, annual rate and loan term.',
    intro: 'This loan calculator estimates a fixed monthly payment for a standard amortizing loan. It is useful for comparing borrowing scenarios, but actual lender fees, insurance, taxes, variable rates, and rounding can change real payments.',
    formula: 'Monthly payment = P × r × (1+r)^n ÷ ((1+r)^n − 1), where P is principal, r is monthly rate, and n is number of payments.',
    example: 'Change the loan amount, annual rate, or term to compare how each variable affects the estimated monthly payment and total interest.',
    faqs: [['Is this an official bank quote?', 'No. It is an estimate only; lenders may use different fees, rates, and calculation rules.'], ['What happens if the interest rate is 0%?', 'The calculator divides the principal evenly across the number of monthly payments.'], ['Does a longer term reduce the EMI?', 'Usually yes, but it can increase the total interest paid over the life of the loan.']]
  },
  {
    slug: 'compound-interest', name: 'Compound Interest Calculator', shortName: 'Compound Interest', icon: '📈', category: 'Finance',
    description: 'Project investment growth with principal, contributions, rate, and compounding.',
    title: 'Compound Interest Calculator - Investment Growth',
    metaDescription: 'Calculate compound interest and projected investment growth with starting balance, regular contributions, interest rate and time.',
    intro: 'Compound interest means returns can earn additional returns over time. This calculator provides a simple projection based on your starting amount, regular monthly contributions, annual rate, and selected period.',
    formula: 'For a lump sum, A = P(1 + r/n)^(nt). Regular contributions are added to the balance and compounded over the remaining periods.',
    example: 'Increasing either the time horizon or contribution amount can substantially change the projected ending balance because contributions and returns accumulate together.',
    faqs: [['Is the result guaranteed?', 'No. It is a mathematical projection and does not predict real investment performance.'], ['What does compounding frequency mean?', 'It is how often interest is added to the balance, such as monthly or annually.'], ['Does this include taxes or fees?', 'No. The estimate does not deduct taxes, investment fees, or inflation.']]
  },
  {
    slug: 'gpa', name: 'GPA Calculator', shortName: 'GPA', icon: '🎓', category: 'Education',
    description: 'Calculate a weighted GPA from course grades and credit hours.',
    title: 'GPA Calculator - Calculate Grade Point Average',
    metaDescription: 'Free GPA calculator for weighted course grades and credit hours. Add courses, select grades and calculate your grade point average.',
    intro: 'A grade point average summarizes academic performance by combining grade points with course credit hours. This calculator uses a common 4.0 scale and lets you add or remove courses as needed.',
    formula: 'GPA = total quality points ÷ total credit hours. Quality points = grade point × course credits.',
    example: 'An A in a 3-credit course contributes more quality points than an A in a 1-credit course because the course carries more weight.',
    faqs: [['Does every school use the same GPA scale?', 'No. Some schools use different grade scales, plus/minus values, or weighting rules.'], ['What is a weighted GPA?', 'It gives more influence to courses with more credit hours or, in some systems, advanced course difficulty.'], ['Can I use this for cumulative GPA?', 'You can enter all relevant courses, but official institutional calculations may use specific rules.']]
  },
  {
    slug: 'grade', name: 'Grade Calculator', shortName: 'Grade', icon: '📝', category: 'Education',
    description: 'Calculate your current weighted grade from assignments and exams.',
    title: 'Grade Calculator - Weighted Course Grade',
    metaDescription: 'Calculate a weighted course grade from assignment scores and weights. Add assessments and see your current percentage instantly.',
    intro: 'A weighted grade calculator is helpful when assignments, quizzes, projects, and exams contribute different percentages to a final course grade. Add each assessment score and its weight to estimate your current weighted result.',
    formula: 'Weighted grade = Σ(score × weight) ÷ Σ(weights).',
    example: 'If an exam is worth 40% of the course, its score has more influence than a quiz worth 10%.',
    faqs: [['Do weights have to add to 100?', 'Not for the current-grade calculation. The calculator normalizes the weights you enter.'], ['Can I calculate the score I need on a final exam?', 'This version focuses on current weighted grade; a dedicated final-grade target tool can be added later.'], ['Why is my result different from my school portal?', 'Schools may apply category rules, dropped scores, extra credit, or rounding differently.']]
  },
  {
    slug: 'date-difference', name: 'Date Difference Calculator', shortName: 'Date Difference', icon: '📅', category: 'Everyday',
    description: 'Count the exact time and total days between two dates.',
    title: 'Date Difference Calculator - Days Between Dates',
    metaDescription: 'Calculate the difference between two dates in years, months, days and total days. Free date duration calculator.',
    intro: 'Use this tool to measure the calendar distance between two dates. It reports total days as well as a calendar-style years, months, and days breakdown for planning, deadlines, anniversaries, and timelines.',
    formula: 'Total days are measured from the timestamp difference. Calendar years, months, and days are calculated by advancing through valid calendar dates.',
    example: 'Choose a start and end date to see both the absolute number of days and a human-friendly calendar breakdown.',
    faqs: [['Does it include the end date?', 'The total is the elapsed time between dates, not an inclusive day count.'], ['Can I enter dates in either order?', 'Yes. The calculator automatically orders the two dates for the duration.'], ['Are leap years included?', 'Yes. Native calendar date calculations account for leap years.']]
  },
  {
    slug: 'tip', name: 'Tip Calculator', shortName: 'Tip', icon: '🍽️', category: 'Money',
    description: 'Calculate tip amount, total bill, and per-person split.',
    title: 'Tip Calculator - Split Bill & Tip Per Person',
    metaDescription: 'Calculate a restaurant tip, total bill and per-person amount. Enter bill total, tip percentage and number of people.',
    intro: 'The tip calculator quickly turns a bill amount and tip percentage into the total amount due. If you are sharing the bill, it can also divide the total evenly across the number of people.',
    formula: 'Tip = bill × tip rate ÷ 100. Total = bill + tip. Per person = total ÷ people.',
    example: 'On a 5,000 bill with a 10% tip, the tip is 500 and the total is 5,500.',
    faqs: [['Should tip be calculated before or after tax?', 'Customs vary by location. This calculator applies the percentage to the bill amount you enter.'], ['Can I split the bill?', 'Yes. Enter the number of people to see an even per-person amount.'], ['Can I enter a custom tip percentage?', 'Yes. Any non-negative percentage can be entered.']]
  },
  {
    slug: 'unit-converter', name: 'Unit Converter', shortName: 'Unit Converter', icon: '🔄', category: 'Conversion',
    description: 'Convert common length, weight, temperature, and area units.',
    title: 'Unit Converter - Length, Weight, Temperature & Area',
    metaDescription: 'Free unit converter for length, weight, temperature and area. Convert common metric and imperial units instantly.',
    intro: 'This converter handles common everyday measurement categories in one place. Choose a category, select the source and destination units, and enter a value to see the converted result instantly in your browser.',
    formula: 'Most conversions use a fixed multiplier relative to a base unit. Temperature requires an offset as well as a scale conversion.',
    example: 'For length, 1 kilometer equals 1,000 meters and approximately 0.621371 miles.',
    faqs: [['Are the conversions exact?', 'Defined metric relationships are exact; displayed decimal results may be rounded.'], ['Can it convert temperature?', 'Yes. Celsius, Fahrenheit, and Kelvin are supported.'], ['Does the tool send my values to a server?', 'No. Calculations run locally in your browser.']]
  },
  {
    slug: 'scientific', name: 'Scientific Calculator', shortName: 'Scientific', icon: '∑', category: 'Math',
    description: 'Perform scientific calculations with trigonometry, logs, powers, and constants.',
    title: 'Scientific Calculator - Trig, Logs, Powers & More',
    metaDescription: 'Free online scientific calculator with trigonometric functions, logarithms, square root, powers, pi and common operations.',
    intro: 'The scientific calculator extends basic arithmetic with common functions used in mathematics, science, and engineering. It supports trigonometric functions, logarithms, square roots, powers, constants, and parentheses.',
    formula: 'Scientific functions follow standard mathematical definitions. Trigonometric functions in this calculator use degrees for easier everyday use.',
    example: 'To calculate sin(30°), enter 30 and press sin; the result is 0.5.',
    faqs: [['Are trigonometric inputs degrees or radians?', 'This calculator uses degrees for sin, cos, and tan.'], ['Can I use parentheses?', 'Yes. Parentheses can be included in expressions.'], ['Is this suitable for exams?', 'Check your exam rules before using any calculator or online tool.']]
  }
];

export const calculatorMap = Object.fromEntries(calculators.map((item) => [item.slug, item]));
