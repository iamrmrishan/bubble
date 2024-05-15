import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "creator";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.creator?.toString() || String(record.id);
};
