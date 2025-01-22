export interface IDisplayDateProps {
  date: string | Date; // Example: "2024-01-15"
  duration?: number; // Number of days
  locale?: string; // Locale for formatting, e.g., "en-US", "de-DE"
  options?: Intl.DateTimeFormatOptions; // Options for `toLocaleDateString`
}
