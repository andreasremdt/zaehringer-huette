/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    icons: Icon;
    pages: Page;
    bookings: Booking;
    messages: Message;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    icons: IconsSelect<false> | IconsSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    bookings: BookingsSelect<false> | BookingsSelect<true>;
    messages: MessagesSelect<false> | MessagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'contact-info': ContactInfo;
    costs: Cost;
  };
  globalsSelect: {
    'contact-info': ContactInfoSelect<false> | ContactInfoSelect<true>;
    costs: CostsSelect<false> | CostsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  /**
   * Die Bildbeschreibung ist für Suchmaschinen und Menschen mit Sehbehinderung notwendig. Sie taucht auf der Webseite nicht auf und sollte nur das Bild beschreiben.
   */
  alt: string;
  /**
   * Die Bildunterschrift wird auf der Webseite oder in der Gallerie angezeigt und kann beliebigen Text beeinhalten.
   */
  caption?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  layout?:
    | (
        | AboutBlock
        | AmenitiesBlock
        | BookNowBlock
        | ContactFormBlock
        | EnvironmentBlock
        | GalleryBlock
        | HeroBlock
        | TestimonialBlock
        | RichTextBlock
        | CalendarBlock
        | ImageHeroBlock
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  /**
   * Der Slug dient zur Identifizierung der Seite und sollte nicht geändert werden.
   */
  slug: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutBlock".
 */
export interface AboutBlock {
  title: string;
  text: string;
  /**
   * Es müssen genau 3 Bilder ausgewählt werden.
   */
  images: (string | Media)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'about';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AmenitiesBlock".
 */
export interface AmenitiesBlock {
  title: string;
  groups?:
    | {
        title: string;
        items: {
          name: string;
          icon: string | Icon;
          id?: string | null;
        }[];
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'amenities';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BookNowBlock".
 */
export interface BookNowBlock {
  title: string;
  text: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'book-now';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactFormBlock".
 */
export interface ContactFormBlock {
  title: string;
  description: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'contact-form';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "EnvironmentBlock".
 */
export interface EnvironmentBlock {
  title: string;
  items?:
    | {
        title: string;
        description: string;
        image: string | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'environment';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "GalleryBlock".
 */
export interface GalleryBlock {
  title: string;
  description: string;
  images: (string | Media)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'gallery';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  /**
   * Dieser Text taucht vor der Überschrift auf und dient als Einleitung.
   */
  pretitle?: string | null;
  title: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialBlock".
 */
export interface TestimonialBlock {
  title: string;
  description: string;
  items?:
    | {
        /**
         * Die Bewertung des Kunden, etwa von Google oder Trustpilot.
         */
        text: string;
        /**
         * Der Name des Autors der Bewertung.
         */
        author: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'testimonial';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextBlock".
 */
export interface RichTextBlock {
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'rich-text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CalendarBlock".
 */
export interface CalendarBlock {
  /**
   * Hier können zusätzliche Informationen zur Buchung erwähnt werden.
   */
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'calendar';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageHeroBlock".
 */
export interface ImageHeroBlock {
  title: string;
  description: string;
  images: (string | Media)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'image-hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookings".
 */
export interface Booking {
  id: string;
  confirmed?: boolean | null;
  /**
   * Die Rechnungs-Nr. wird für die Erstellung der Rechnung benötigt.
   */
  invoiceId?: string | null;
  name: string;
  email: string;
  phone?: string | null;
  adults: number;
  kids?: number | null;
  message?: string | null;
  from: string;
  to: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Message {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'icons';
        value: string | Icon;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'bookings';
        value: string | Booking;
      } | null)
    | ({
        relationTo: 'messages';
        value: string | Message;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  caption?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons_select".
 */
export interface IconsSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        about?: T | AboutBlockSelect<T>;
        amenities?: T | AmenitiesBlockSelect<T>;
        'book-now'?: T | BookNowBlockSelect<T>;
        'contact-form'?: T | ContactFormBlockSelect<T>;
        environment?: T | EnvironmentBlockSelect<T>;
        gallery?: T | GalleryBlockSelect<T>;
        hero?: T | HeroBlockSelect<T>;
        testimonial?: T | TestimonialBlockSelect<T>;
        'rich-text'?: T | RichTextBlockSelect<T>;
        calendar?: T | CalendarBlockSelect<T>;
        'image-hero'?: T | ImageHeroBlockSelect<T>;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutBlock_select".
 */
export interface AboutBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  images?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AmenitiesBlock_select".
 */
export interface AmenitiesBlockSelect<T extends boolean = true> {
  title?: T;
  groups?:
    | T
    | {
        title?: T;
        items?:
          | T
          | {
              name?: T;
              icon?: T;
              id?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BookNowBlock_select".
 */
export interface BookNowBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactFormBlock_select".
 */
export interface ContactFormBlockSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "EnvironmentBlock_select".
 */
export interface EnvironmentBlockSelect<T extends boolean = true> {
  title?: T;
  items?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "GalleryBlock_select".
 */
export interface GalleryBlockSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  images?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  pretitle?: T;
  title?: T;
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialBlock_select".
 */
export interface TestimonialBlockSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  items?:
    | T
    | {
        text?: T;
        author?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextBlock_select".
 */
export interface RichTextBlockSelect<T extends boolean = true> {
  content?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CalendarBlock_select".
 */
export interface CalendarBlockSelect<T extends boolean = true> {
  content?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageHeroBlock_select".
 */
export interface ImageHeroBlockSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  images?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookings_select".
 */
export interface BookingsSelect<T extends boolean = true> {
  confirmed?: T;
  invoiceId?: T;
  name?: T;
  email?: T;
  phone?: T;
  adults?: T;
  kids?: T;
  message?: T;
  from?: T;
  to?: T;
  address?: T;
  zip?: T;
  city?: T;
  country?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages_select".
 */
export interface MessagesSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  phone?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-info".
 */
export interface ContactInfo {
  id: string;
  /**
   * Der Titel wird im Browser, in den Suchergebnissen und in der Navigation angezeigt.
   */
  title: string;
  /**
   * Dieser Text wird unterhalb des Titels angezeigt.
   */
  subtitle: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "costs".
 */
export interface Cost {
  id: string;
  pricePerNight: number;
  pricePerExtraPerson: number;
  taxAdults: number;
  taxKids: number;
  woodCostsWinter: number;
  woodCostsSummer: number;
  cleaningFee: number;
  discount: number;
  deposit: number;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-info_select".
 */
export interface ContactInfoSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  street?: T;
  zip?: T;
  city?: T;
  country?: T;
  phone?: T;
  email?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "costs_select".
 */
export interface CostsSelect<T extends boolean = true> {
  pricePerNight?: T;
  pricePerExtraPerson?: T;
  taxAdults?: T;
  taxKids?: T;
  woodCostsWinter?: T;
  woodCostsSummer?: T;
  cleaningFee?: T;
  discount?: T;
  deposit?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}