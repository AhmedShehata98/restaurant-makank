export const aboutUsSectionQuery = `
  query About {
    about {
      id
      description
      about_image {
        id
        type
      }
      features
      primary_action
      secondary_action
    }
  }
`;

export const aboutUsPageQuery = `
  query About {
    hero {
        id
        subtitle
        description
        image {
            id
            type
        }
    }
    about {
      id
      description
      about_image {
        id
        type
      }
      features
    }
    global_config {
        id
        restaurant_address
        restaurant_phone
    }
  }
`;
