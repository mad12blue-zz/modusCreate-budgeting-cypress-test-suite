Feature: Manage Budget in the Budget management app

  I want to Manage my Budget in the Budget management app

  Scenario: Opening budget management app page
    Given I open Budgeting page
    Then I see "Budgeting" in the title

  Scenario: Add Income in the budget
    Given I am on "Budget" view
    When I select "Income" from category dropdown
    When I enter "TestIncome_" as Description
    When I enter "1500.01" as Value
    When I hit the add button
    Then I see sum of "Income" amount equals total "Inflow"

  Scenario: Add Expense in the budget
    Given I am on "Budget" view
    When I select "Insurance" from category dropdown
    When I enter "TestExpense_" as Description
    When I enter "3813.59" as Value
    When I hit the add button
    Then I see sum of "Expense" amount equals total "Outflow"

  Scenario: Verify expenses in the Reports view of budget management
    Given I am on Budget management app
    When I goto "Reports" view of Budget management
    Then I see "Reports" view load
    Then I see sum of "Expense" amount equals total "Outflow" bar

  Scenario: Verify the Working Balance in the Budget view of budget management (This test case fails since the 'Working Balance' doesn't display value in red and negative when TotalOutflow is greater than TotalInflow)
    Given I am on Budget management app
    When I goto "Budget" view of Budget management
    Then I see "Buget" view load
    Then I see sum of Total Inflow and Total Outflow equals Working Balance