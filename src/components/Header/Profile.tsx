import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData=true }: ProfileProps) {
    return (
        <Flex align="center">
                { showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Natan Lima</Text>
                        <Text color="gray.300" fontSize="small">
                            natanlimadev@gmail.com
                        </Text>
                    </Box>
                ) }

            <Avatar size="md" name="Natan Lima" src="https://github.com/natanlimaz.png"/>
        </Flex>
    );
}