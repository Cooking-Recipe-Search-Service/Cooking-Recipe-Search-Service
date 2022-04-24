import { isPresent } from '@taiga-ui/cdk';

export function isNotPresentOrEmptyString(str: string): boolean {
    return !isPresent(str) || str.trim() === '';
}
