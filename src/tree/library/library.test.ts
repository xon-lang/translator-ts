import { translateModule } from '../../translate';

test('imports', () => {
    const code = 'xon.math: DNN as Net \n';
    expect(translateModule(code)).toBe("import { DNN as Net } from 'xon/math';");
});
