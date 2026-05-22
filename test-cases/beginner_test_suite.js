pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is under 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});

pm.test("Response contains required fields", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.have.property("userId");
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("title");
    pm.expect(jsonData).to.have.property("body");
});

pm.test("Post ID is correct", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.eql(1);
});