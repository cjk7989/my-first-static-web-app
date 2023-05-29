module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    });

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     headers: {
    //         "Authorization": "Bearer some-token"
    //     },
    //     body: "Hello from Azure Static Web Apps API"
    // };
};