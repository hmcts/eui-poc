import { ShowReportExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext } from "@nrwl/devkit";

const options: ShowReportExecutorSchema = {};

describe('ShowReport Executor', () => {
  it('can run', async () => {
    // @ts-ignore
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});