interface Committer {
  date: Date;
  email: string;
  name: string;
}

interface Commit {
  author: object;
  comment_count: number;
  committer: Committer;
  message: string;
  tree: object;
  url: string;
  verification: object;
}

export interface CommitData {
  author: any;
  comments_url: string;
  commit: Commit;
  committer: any;
  html_url: string;
  node_id: string;
  parents: any[];
  sha: string;
  url: string;
}
