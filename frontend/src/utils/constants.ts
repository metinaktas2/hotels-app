export const SORT_OPTIONS = [
  {
    label: "En Ucuz",
    value: "price-asc",
  },
  {
    label: "En Pahalı",
    value: "price-desc",
  },
  {
    label: "En Yüksek Puanlı",
    value: "rating-desc",
  },
  {
    label: "En Düşük Puanlı",
    value: "rating-asc",
  },
];

export const INITIAL_VALUES = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: 0,
  price_per_night: 0,
  availability: false,
};

export const INPUT_FIELDS = [
  {
    label: "Adı",
    name: "name",
    type: "text",
    placeholder: "örn:SeaSideVilla",
  },
  {
    label: "Konum",
    name: "location",
    type: "text",
    placeholder: "örn:Mersin",
  },
  {
    label: "Adres",
    name: "address",
    type: "text",
    placeholder: "örn:134 Mahallesi Aslan Sok., Mersin",
  },
  {
    label: "Açıklama",
    name: "description",
    type: "text",
    placeholder: "örn:Villa ferah bir bahçeye sahip",
  },
  {
    label: "Hizmetler",
    name: "amenities",
    type: "text",
    placeholder: "örn:Wİ-Fİ, TV, Banyo",
  },
  {
    label: "Puan",
    name: "rating",
    type: "number",
    placeholder: "örn:5",
  },
  {
    label: "Fiyat",
    name: "price_per_night",
    type: "number",
    placeholder: "örn:100",
  },
  {
    label: "Mevcutluk",
    name: "availability",
    type: "checkbox",
  },
];
