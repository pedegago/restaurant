import ActionTypes from "../actions/ActionTypes";

export const products = (
    state = {
        products: [
            {
                id: "001",
                name: "Name of Menu 1",
                price: 11.99,
                image: "/static/images/menu1.jpg",
                options: [
                    {value: "1", label: "Option 1"},
                    {value: "2", label: "Option 2"},
                    {value: "3", label: "Option 3"},
                    {value: "4", label: "Option 4"},
                    {value: "5", label: "Option 5"},
                    {value: "6", label: "Option 6"}
                ],
                description: "Description goes here. And more descrition too. Other description and more and more."
            },
            {
                id: "002",
                name: "Name of Menu 2",
                price: 12.99,
                image: "/static/images/menu2.jpg",
                options: [
                    {value: "1", label: "Option 1"},
                    {value: "2", label: "Option 2"},
                    {value: "3", label: "Option 3"},
                    {value: "4", label: "Option 4"},
                    {value: "5", label: "Option 5"},
                    {value: "6", label: "Option 6"}
                ],
                description: "Description goes here. And more descrition too. Other description and more and more."
            },
            {
                id: "003",
                name: "Name of Menu 3",
                price: 13.99,
                image: "/static/images/menu3.jpg",
                options: [
                    {value: "1", label: "Option 1"},
                    {value: "2", label: "Option 2"},
                    {value: "3", label: "Option 3"},
                    {value: "4", label: "Option 4"},
                    {value: "5", label: "Option 5"},
                    {value: "6", label: "Option 6"}
                ],
                description: "Description goes here. And more descrition too. Other description and more and more."
            }
        ]
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        };
    }

    return state;
};

export const order = (
    state = {
        products: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.CHANGE_ORDER: {
            return {
                ...state,
                products: action.payload
            };
        };
    }

    return state;
};