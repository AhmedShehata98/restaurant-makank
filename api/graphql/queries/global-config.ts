import gql from "graphql-tag";

export const logoQuery = `
  query GlobalConfig {
    global_config {
      restaurant_logo {
        id
        type
      }
    }
  }
`;

export const footerQuery = `
  query GlobalConfig {
    global_config {
      restaurant_logo {
        id
        type
      }
      description
      social_links {
        id
        icon_image {
          id
          type
        }
        url
      }
    }
  }
`;

export const termsAndConditionsOfPrivacyQuery = `
  query GlobalConfig {
    global_config {
      terms
    }
  }
`;

export const socialLinksQuery = gql`
  query GlobalConfig {
    global_config {
      id
      social_links {
        id
        icon_image {
          id
          type
        }
        url
      }
    }
  }
`;
