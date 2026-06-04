# API Testing Portfolio Project

## Overview

This project demonstrates manual and automated API testing skills using Postman. The objective was to validate the functionality, reliability, and behavior of a REST API through positive, negative, and data validation test scenarios.

The project focuses on verifying API endpoints, validating response data, testing error handling, and creating automated assertions to ensure expected behavior.

---

## Objectives

* Validate REST API functionality
* Verify HTTP status codes and response data
* Perform positive and negative testing
* Create automated API validations using Postman scripts
* Document test cases, defects, and test execution results
* Demonstrate QA testing methodology and best practices

---

## API Under Test

**JSONPlaceholder**

Base URL:

```text
https://jsonplaceholder.typicode.com
```

JSONPlaceholder is a free REST API commonly used for testing and learning API development and QA practices.

---

## Testing Scope

### GET Requests

* Retrieve a single post
* Retrieve all posts
* Retrieve posts by user
* Retrieve invalid resources

### POST Requests

* Create new records
* Validate response payloads

### PUT/PATCH Requests

* Update existing records
* Verify updated values

### DELETE Requests

* Delete existing records
* Validate deletion responses

### Negative Testing

* Invalid resource IDs
* Missing parameters
* Incorrect request data
* Empty responses

---

## Tools Used

* Postman
* Newman
* GitHub
* JSONPlaceholder REST API

---

## Project Structure

```text
api-testing-portfolio-project/
│
├── README.md
│
├── collections/
│   └── API_Testing_Collection.json
│
├── environments/
│   └── Local_Environment.json
│
├── test-cases/
│   └── API_Test_Cases.xlsx
│
├── bug-reports/
│   └── API_Bug_Report.xlsx
│
├── test-summary/
│   └── Test_Summary_Report.md
│
├── screenshots/
│   ├── collection-overview.png
│   ├── successful-test-run.png
│   └── failed-validation-example.png
│
├── newman/
│   └── newman-report.html
│
└── docs/
    ├── api-overview.md
    └── testing-strategy.md
```

---

## Automated Validations

The following automated checks were implemented using Postman test scripts:

### Response Validation

* Status code verification
* Content-Type validation
* Response time validation
* JSON schema validation
* Required field verification

### Data Validation

* Field existence checks
* Data type verification
* Record count validation
* Query parameter validation

### Negative Testing Validation

* Invalid resource handling
* Empty response verification
* Error response validation

---

## Example Automated Test

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains required fields", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.have.property("userId");
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("title");
    pm.expect(jsonData).to.have.property("body");
});
```

---

## Key QA Practices Demonstrated

* Test Case Design
* API Functional Testing
* Negative Testing
* Defect Documentation
* Test Execution Reporting
* Automated API Validation
* Test Data Verification
* REST API Fundamentals

---

## Results

* Successfully tested multiple REST API endpoints
* Implemented automated validation scripts
* Executed positive and negative test scenarios
* Documented test cases and findings
* Created reusable API test collections

---

## Future Enhancements

* Integrate Newman CLI execution
* Add GitHub Actions CI/CD pipeline
* Implement JSON schema validation
* Add environment-specific configurations
* Expand automated test coverage

---

## Author

Riley Nolan

Created as part of a QA Engineering portfolio to demonstrate practical software testing skills, API validation techniques, and automation fundamentals.
