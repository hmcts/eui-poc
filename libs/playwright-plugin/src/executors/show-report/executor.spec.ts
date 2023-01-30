import { ShowReportExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext } from "@nrwl/devkit";

const options: ShowReportExecutorSchema = {};
const mockContext = {
  workspace: { projects: { foo: { root: 'libs/foo' } } },
  projectName: 'foo',
} as any;
xdescribe('ShowReport Executor', () => {
  it('can run', async () => {
    const output = await executor(options, mockContext);
    expect(output.success).toBe(true);
  });
});