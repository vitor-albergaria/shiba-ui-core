export interface ITimelineItem {
  id?: number;
  title: string;
  subtitle: string;
  details: string[];
}

export interface ITimeline {
  data: ITimelineItem[];
  isHidden?: boolean;
}
