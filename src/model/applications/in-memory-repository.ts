import { ApplicationRepository, ContributionApplicationDto, CreateParams, ListParams } from "./repository";

let indexId = 4;
export class InMemoryApplicationRepository implements ApplicationRepository {
  private contributionsApplications: Array<ContributionApplicationDto> = [
    { id: "1", contribution_id: "1", contributor_id: 1 },
    { id: "2", contribution_id: "2", contributor_id: 2 },
    { id: "3", contribution_id: "2", contributor_id: 38 },
    { id: "4", contribution_id: "3", contributor_id: 1 },
    { id: "5", contribution_id: "4", contributor_id: 38 },
  ];

  public async list({ contributorId }: ListParams): Promise<ContributionApplicationDto[]> {
    return this.contributionsApplications.filter(
      (application: ContributionApplicationDto) =>
        contributorId === undefined || application.contributor_id === contributorId
    );
  }

  public async create({ contributionId, contributorId }: CreateParams) {
    this.contributionsApplications.push({
      id: indexId.toString(),
      contribution_id: contributionId,
      contributor_id: contributorId,
    });

    indexId++;

    return true;
  }
}
