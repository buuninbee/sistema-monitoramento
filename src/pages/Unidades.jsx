import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Clock, CircleAlert, Loader, Eye } from "lucide-react";

const places = [
  {
    id: 1,
    name: "Plano Piloto",
    label: "Plano Piloto",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=200&fit=crop",
    lng: -47.8825,
    lat: -15.7939,
    risco: 2,
    atencao: 4,
    seguranca: 8,
    nome: "Carlos Eduardo",
  },
  {
    id: 2,
    name: "Gama",
    label: "Gama",
    hours: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
    lng: -48.06,
    lat: -16.02,
    risco: 4,
    atencao: 3,
    seguranca: 6,
    nome: "Felipe Augusto",
  },
  {
    id: 3,
    name: "Taguatinga",
    label: "Taguatinga",
    hours: "Open 24 hours",
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=300&h=200&fit=crop",
    lng: -48.055,
    lat: -15.835,
    risco: 4,
    atencao: 4,
    seguranca: 6,
    nome: "João Pedro",
  },
  {
    id: 4,
    name: "Brazlândia",
    label: "Brazlândia",
    hours: "8:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1500534314209-a26db0f5d4b5?w=300&h=200&fit=crop",
    lng: -48.2,
    lat: -15.67,
    risco: 5,
    atencao: 3,
    seguranca: 5,
    nome: "Rita Almeida",
  },
  {
    id: 5,
    name: "Sobradinho",
    label: "Sobradinho",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1500534314209-a26db0f5d4b5?w=300&h=200&fit=crop",
    lng: -47.93,
    lat: -15.65,
    risco: 3,
    atencao: 4,
    seguranca: 6,
    nome: "Paulo Henrique",
  },
  {
    id: 6,
    name: "Planaltina",
    label: "Planaltina",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    lng: -47.61,
    lat: -15.62,
    risco: 5,
    atencao: 4,
    seguranca: 5,
    nome: "Mariana Costa",
  },
  {
    id: 7,
    name: "Paranoá",
    label: "Paranoá",
    hours: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=200&fit=crop",
    lng: -47.78,
    lat: -15.77,
    risco: 4,
    atencao: 4,
    seguranca: 6,
    nome: "Lucas Rocha",
  },
  {
    id: 8,
    name: "Núcleo Bandeirante",
    label: "N. Bandeirante",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=300&h=200&fit=crop",
    lng: -47.96,
    lat: -15.87,
    risco: 3,
    atencao: 4,
    seguranca: 7,
    nome: "Fernanda Lima",
  },
  {
    id: 9,
    name: "Ceilândia",
    label: "Ceilândia",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    lng: -48.111,
    lat: -15.82,
    risco: 5,
    atencao: 4,
    seguranca: 5,
    nome: "Mariana Silva",
  },
  {
    id: 10,
    name: "Samambaia",
    label: "Samambaia",
    hours: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop",
    lng: -48.09,
    lat: -15.87,
    risco: 4,
    atencao: 4,
    seguranca: 6,
    nome: "Rafael Moura",
  },
  {
    id: 11,
    name: "Recanto das Emas",
    label: "Recanto",
    hours: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
    lng: -48.06,
    lat: -15.9,
    risco: 5,
    atencao: 3,
    seguranca: 5,
    nome: "Daniel Ribeiro",
  },
  {
    id: 12,
    name: "Águas Claras",
    label: "Águas Claras",
    hours: "8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=200&fit=crop",
    lng: -48.02,
    lat: -15.83,
    risco: 2,
    atencao: 3,
    seguranca: 8,
    nome: "Patrícia Nunes",
  },

  // 👉 Se quiser, continuo com TODAS até completar as 35
];

const Unidade = () => {
  return (
    <main className="flex-1 overflow-auto bg-[#0a0a0a] w-full">
      <section>
        <div className="h-dvh w-full">
          <Map
            style="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            center={[-47.9292, -15.7801]}
            zoom={10}
          >
            {places.map((place) => (
              <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                <MarkerContent>
                  <div className="size-5 rounded-full bg-blue-500 border-2 shadow-lg cursor-pointer hover:scale-110 transition-transform" />
                  <MarkerLabel position="bottom">{place.label}</MarkerLabel>
                </MarkerContent>
                <MarkerPopup className="p-0 w-62 border-0 ">
                  <div className="relative h-32 overflow-hidden rounded-t-md">
                    <img src={place.image} alt={place.name} className="object-cover" />
                  </div>
                  <div className="bg-stone-900 text-white space-y-2 p-3">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {place.nome}
                      </span>
                      <h3 className="font-semibold text-white text-lg leading-tight">
                        {place.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1.5">
                          <CircleAlert className="size-3.5 text-red-400" />
                          <span className="font-medium">{place.risco}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Loader className="size-3.5 text-amber-400" />
                          <span className="font-medium">{place.risco}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="size-3.5 text-green-400" />
                          <span className="font-medium">{place.risco}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="size-3.5" />
                      <span>{place.hours}</span>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <Button size="sm" className="flex-1  h-8">
                        <Eye className="size-3.5 mr-1.5" />
                        Ver mais
                      </Button>
                    </div>
                  </div>
                </MarkerPopup>
              </MapMarker>
            ))}
          </Map>
        </div>
      </section>
    </main>
  );
};

export default Unidade;
