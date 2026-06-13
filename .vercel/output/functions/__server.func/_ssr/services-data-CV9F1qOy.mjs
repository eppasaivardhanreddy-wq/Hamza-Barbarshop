const services = [
  { id: "haarschnitt", duration: "30", price: "12,00 €", category: "haupt" },
  { id: "waschen-schneiden", duration: "40", price: "14,00 €", category: "haupt" },
  { id: "haarschnitt-kinder", duration: "30", price: "10,00 €", category: "haupt" },
  { id: "kopfmassage", duration: "15", price: "4,00 €", category: "haupt" },
  { id: "komplett-pflege", duration: "75", price: "20,00 €", category: "haupt" },
  { id: "klassische-nassrasur", duration: "30", price: "6,00 €", category: "haupt" },
  { id: "nassrasur-modell", duration: "40", price: "8,00 €", category: "haupt" },
  { id: "grauabdeckung-bart", duration: "30", price: "6,00 €", category: "haupt" },
  { id: "augenbrauen-zupfen", duration: "10", price: "6,00 €", category: "extras" },
  { id: "gesichtsreinigung-dampf", duration: "20", price: "8,00 €", category: "extras" },
  { id: "maske", duration: "15", price: "6,00 €", category: "extras" },
  { id: "wachs-ohren-nase", duration: "10", price: "4,00 €", category: "extras" },
  { id: "wachs-komplett", duration: "15", price: "6,00 €", category: "extras" }
];
const styles = [
  { id: "haarschnitt", key: "classic", img: "classic" },
  { id: "waschen-schneiden", key: "modern", img: "modern" },
  { id: "klassische-nassrasur", key: "shave", img: "shave" },
  { id: "grauabdeckung-bart", key: "beard", img: "beard" },
  { id: "nassrasur-modell", key: "skinfade", img: "skin-fade" },
  { id: "haarschnitt-kinder", key: "fatherson", img: "father-son" }
];
export {
  services as a,
  styles as s
};
