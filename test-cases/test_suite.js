pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is under 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Response is an array", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.be.an("array");
});

pm.test("Array is not empty", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.length).to.be.above(0);
});

pm.test("Every post belongs to userId 1", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(post => {
        pm.expect(post.userId).to.eql(1);
    });
});

pm.test("Each post contains required fields", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(post => {
        pm.expect(post).to.have.property("userId");
        pm.expect(post).to.have.property("id");
        pm.expect(post).to.have.property("title");
        pm.expect(post).to.have.property("body");
    });
});

pm.test("Post IDs are numbers", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(post => {
        pm.expect(post.id).to.be.a("number");
    });
});