# Finb Tech - Advanced Personal Financial Dashboard

This project is my submission for the Finb Tech Frontend Engineer Technical Assignment. It's a responsive and interactive personal finance dashboard web interface that visualizes user financial data using charts, reusable components, and state management.

## Live Demo

[View Live Demo](https://finb-tech-dashboard.vercel.app)

## Project Overview

The Advanced Personal Financial Dashboard is a comprehensive financial management tool that helps users track their income, expenses, savings, and budgets. It provides visual representations of financial data through charts and graphs, allowing users to gain insights into their spending habits and financial health.

## Features Implemented

1. **Header & Profile Section**

   - Personalized greeting with user name and avatar
   - Monthly savings goal status bar

2. **Financial Overview Cards**

   - Total Account Balance
   - Monthly Income
   - Monthly Expenses
   - Savings Ratio
   - Support for toggling between Monthly, Quarterly, and Year-to-date views

3. **Charts**

   - Expense vs Income Chart (line chart)
   - Category-Wise Spending Pie Chart with interactive segments
   - Color-coded category legends

4. **Recent Transactions Table**

   - Shows latest 10 transactions
   - Includes: Date, Description, Category, Amount
   - Color-coded (green for income, red for expenses)
   - Filter and search options

5. **Notifications & Tips**

   - Smart alerts for unusual spending
   - Budget tips & insights

6. **Budgeting Assistant**

   - Monthly budget by category
   - Visual indicator of budget usage (progress bars)

7. **Additional Features**

- **Financial Goals Tracking**

  - Track progress towards savings and investment goals
  - Visual progress indicators

- **Dark Mode Toggle**

  - Switch between light and dark themes
  - Persists user preference

- **Responsive Design**
  - Mobile-first approach
  - Adapts to all screen sizes

## Technologies Used

- **Framework**: React with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## Time Spent

I spent approximately 25 hours on this project, distributed as follows:

- **Planning and Research**: 3 hours

  - Analyzing requirements
  - Researching UI/UX patterns for financial dashboards
  - Planning component structure

- **Core Development**: 16 hours

  - Setting up project structure
  - Implementing components
  - Creating charts and data visualizations
  - Building responsive layouts

- **Styling and Refinement**: 4 hours

  - Implementing Tailwind CSS
  - Creating dark mode
  - Polishing UI elements

- **Testing and Bug Fixing**: 2 hours
  - Cross-browser testing
  - Responsive design testing
  - Bug fixes

## Assumptions

During the development of this project, I made the following assumptions:

1. **Data Source**: Since this is a frontend assignment, I created mock data to simulate API responses. In a real-world scenario, this data would come from backend APIs.

2. **User Authentication**: I assumed that user authentication would be handled separately, so I focused on the dashboard functionality assuming the user is already logged in.

3. **Performance Optimization**: I assumed that the amount of data would be manageable for client-side processing. For larger datasets, server-side pagination and filtering would be necessary.

4. **Browser Compatibility**: I developed the application with modern browsers in mind (Chrome, Firefox, Safari, Edge).

5. **Accessibility**: I implemented basic accessibility features but assumed that a more comprehensive accessibility audit would be conducted in a production environment.

## Key Decisions

1. **React with TypeScript**: I chose React with TypeScript for type safety and better developer experience. TypeScript helps catch errors early in the development process and provides better code documentation.

2. **Tailwind CSS**: I selected Tailwind CSS for styling because it allows for rapid UI development while maintaining consistency. It also makes responsive design much easier to implement.

3. **Context API for State Management**: For this project's scope, React's Context API was sufficient for state management. It provides a clean way to share state across components without prop drilling.

4. **Recharts for Data Visualization**: I chose Recharts for its simplicity, flexibility, and React integration. It provides responsive charts that work well with the rest of the UI.

5. **Component Structure**: I organized components into reusable, single-responsibility units to maintain clean code and enable future extensions.

6. **Mobile-First Approach**: I designed the UI with a mobile-first approach to ensure good user experience across all device sizes.

7. **Dark Mode Implementation**: I implemented dark mode using Tailwind's dark mode feature and React Context to persist user preference.

## Challenges and Solutions

1. **Challenge**: Implementing responsive charts that look good on all screen sizes.
   **Solution**: Used Recharts' ResponsiveContainer and custom styling to ensure charts adapt well to different screen sizes.

2. **Challenge**: Managing state across multiple components for timeframe toggling (monthly, quarterly, yearly).
   **Solution**: Created a shared state in parent components and passed it down to children, ensuring consistent data display.

3. **Challenge**: Creating an intuitive drill-down experience for the spending category chart.
   **Solution**: Implemented a state-based approach that tracks the selected category and displays subcategories when clicked.

4. **Challenge**: Ensuring consistent styling between light and dark modes.
   **Solution**: Used Tailwind's dark mode variant and created a comprehensive theme system with CSS variables.

## Future Improvements

Given more time, I would implement the following improvements:

1. **Calendar-based Tracker**: Add the optional monthly calendar showing daily spending with clickable days to view transactions.

2. **Data Export**: Add functionality to export financial data in various formats (CSV, PDF).

3. **Advanced Filtering**: Implement more advanced filtering options for transactions, including date ranges and multiple categories.

4. **Performance Optimization**: Implement virtualization for large transaction lists and optimize chart rendering.

5. **Animations**: Add subtle animations using Framer Motion to enhance the user experience.

6. **Unit Tests**: Add comprehensive unit tests for components and utility functions.

## Installation and Setup

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/finb-tech-dashboard.git
   cd finb-tech-dashboard
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

5. Preview the production build:
   \`\`\`bash
   npm run preview
   \`\`\`

## Conclusion

This project demonstrates my ability to create a complex, interactive, and responsive financial dashboard using modern frontend technologies. I focused on creating a clean, intuitive user interface while implementing all the required features and maintaining good code organization and structure.

I enjoyed working on this assignment and would be happy to discuss any aspect of my implementation in more detail.
