using {ActivityService.ActivityEntity} from '../../srv/activity-service';


annotate ActivityEntity with @(UI : {
  SelectionFields : [
    description,
    participantRate,
    datetime
  ],
  LineItem        : [
    {Value : datetime, },
    {Value : description, },
    {Value : participantRate},
  ]
});
