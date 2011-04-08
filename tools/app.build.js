({
    appDir: "../htdocs.tmp",
    baseUrl: ".",
    paths: { "ydmf": "js/ydmf", "sofea": "js/sofea" },
    dir: "../htdocs",
    modules: [
        {
            name: "ydmf",
            exclude: ["lib/hashchange"]
        },
        { name: "sofea/controller/aboutus", exclude: ["ydmf", "sofea/component/MainLayout"] },
        { name: "sofea/controller/benefits", exclude: ["ydmf", "sofea/component/MainLayout"] },
        { name: "sofea/controller/index", exclude: ["ydmf", "sofea/component/MainLayout"] },
        { name: "sofea/component/MainLayout", exclude: ["ydmf"] }
    ]
})
