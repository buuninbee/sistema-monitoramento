import { create } from "zustand";

export const useDashboardStore =
  create <
  DashboardStore >
  ((set) => ({
    searchQuery: "",
    typeFilter: "all",
    statusFilter: "all",
    sourceFilter: "all",
    sortBy: "name",
    sortOrder: "asc",
    chartPeriod: "last_month",
    setSearchQuery: (query) => set({ searchQuery: query }),
    setTypeFilter: (filter) => set({ typeFilter: filter }),
    setStatusFilter: (filter) => set({ statusFilter: filter }),
    setSourceFilter: (filter) => set({ sourceFilter: filter }),
    setSortBy: (sort) => set({ sortBy: sort }),
    setSortOrder: (order) => set({ sortOrder: order }),
    setChartPeriod: (period) => set({ chartPeriod: period }),
    clearFilters: () =>
      set({
        searchQuery: "",
        typeFilter: "all",
        statusFilter: "all",
        sourceFilter: "all",
        sortBy: "name",
        sortOrder: "asc",
      }),
  }));
