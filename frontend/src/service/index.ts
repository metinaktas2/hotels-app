import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import type {
  FilterParams,
  PlaceFormData,
  PlaceResponse,
  PlacesResponse,
} from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const usePlaces = (params: FilterParams) =>
  useQuery({
    queryKey: ["places", params],
    queryFn: () => api.get<PlacesResponse>("/api/places", { params }),
    select: (res) => res.data.places,
    retry: 2,
    retryDelay: 1000,
  });

//id'sine göre konalama noktasını al
export const usePlace = (id: string | undefined) =>
  useQuery({
    enabled: !!id,
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/api/place/${id}`),
    select: (res) => res.data.place,
  });

//konaklama noktasını sil
export const useDeletePlace = (id: string) => {
  const navigate = useNavigate();
  return useMutation({
    //atılacak istek
    mutationFn: () => api.delete(`/api/place/${id}`),
    //istek başarılı olursa
    onSuccess: (res) => {
      toast.success("Başarıyla silindi");
      navigate("/");
    },
    onError: (err) => {
      toast.error("Bir hata oluştu");
    },
  });
};

//yeni konaklama noktası oluştur

export const useCreatePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: PlaceFormData) => api.post("/api/places", data),
    onSuccess: (res) => {
      toast.success("Başarıyla oluşturuldu");
      navigate(`/place/${res.data.place.id}`);
      console.log(res.data);
    },
    onError: (err) => {
      toast.error("Bir hata oluştu");
    },
  });
};
