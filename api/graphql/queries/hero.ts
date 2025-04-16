const contentQuery = `
    query Hero {
        hero {
            id
            title
            subtitle
            description
            action
            image {
                id
                type
            }
            pattern_image {
                id
                type
            }
        }
    }
`;
const cardsQuery = `
    query HeroCards {
        hero_cards {
            id
            title
            description
            action
            image {
                id
                type
            }
            action_image {
                id
                type
            }
        }
        global_config {
            id
            restaurant_address
            restaurant_phone
        }
    }
`;
export { contentQuery, cardsQuery };
