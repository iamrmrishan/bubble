export type Subscription = {
  createdAt: Date;
  creator: string | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  subscriber: string | null;
  updatedAt: Date;
};
