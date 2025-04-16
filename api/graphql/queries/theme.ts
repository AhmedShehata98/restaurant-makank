import gql from "graphql-tag";

export const themeQuery = `
  query Themes {
    themes {
      id
      name
      value
    }
  }
`;
export const fontQuery = `
  query Fonts {
    font_families {
      primary
      secondary
    }
    font_weights {
      primary
      secondary
    }
    font_stacks {
      primary
      secondary
    }
  }
`;
export const themeByIdQuery = gql`
  query ThemesById {
    themes_by_id(id: $id) {
      id
      name
      value
    }
  }
`;
