import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsMenu extends Schema.Component {
  collectionName: 'components_items_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Label: Attribute.String;
    Url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.menu': ItemsMenu;
    }
  }
}
