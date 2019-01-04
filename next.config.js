const withSass = require("@zeit/next-sass");

const products = [
    {
        id: "001",
        name: "Dry Skin Bar Soap - 3oz",
        category: "bar-soaps",
        price: 43.34,
        image: "/static/images/img_oatmeal_3oz_6pack_01.jpg"
    },
    {
        id: "002",
        name: "Medicated Ointment - 1oz",
        category: "medicated-ointment",
        price: 33.34,
        image: "/static/images/img_medicated_ointment_022.jpg"
    },
    {
        id: "003",
        name: "6 Pack Original Scent Bar Soap - 5.25oz",
        category: "antibacterial-soap",
        price: 3.34,
        image: "/static/images/img_antibacterial_hand_soap_7oz_01.jpg"
    },
    {
        id: "004",
        name: "Original Scent Bar Soap - 5.25oz",
        category: "body-lotion",
        price: 31.34,
        image: "/static/images/img_moisturizing_body_lotion_3pack_01.jpg"
    }
];

module.exports = withSass({
    exportPathMap: async () => {
        let paths = {};

        paths["/"] = { page: "/" };

        const categories = [
            "cuticura-products",
            "antibacterial-soap",
            "bar-soaps",
            "medicated-ointment",
            "body-lotion"
        ];
        categories.map((c) => {
            paths[`/${c}`] = {
                page: "/products",
                query: { category: c }
            };
        });

        products.map((p) => {
            const name = p.name.replace(/\s+/g, "-");

            paths[`/details/${name.toLowerCase()}`] = {
                page: "/details",
                query: { id: p.id }
            };
        });

        return paths;
    }
});