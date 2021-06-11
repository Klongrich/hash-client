import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  Heading,
  HStack,
  Img,
  Link,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { BsPlayFill } from 'react-icons/bs';
import ReactPlayer from 'react-player';

import useStore from '../store';

export default function About() {
  const { toggleRequestModal } = useStore();
  const { account } = useWeb3React();

  return (
    <Box as="section" py="24" bgColor={mode('white', 'gray.800')}>
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 24rem' }}
          columnGap={{ base: '12', lg: '20' }}
          rowGap="10"
        >
          <Box
            pos="relative"
            cursor="pointer"
            className="group"
            h="400px"
            overflow="hidden"
          >
            <Box
              pos="relative"
              cursor="pointer"
              className="group"
              h="400px"
              overflow="hidden"
            >
              <Img
                w="full"
                h="full"
                objectFit="cover"
                htmlWidth="672"
                htmlHeight="448"
                src="./justin-eerie.jpeg"
                alt="Justin Shenkarow"
                transition="all 0.2s"
                _groupHover={{ transform: 'scale(1.05)' }}
              />
              <Circle
                centerContent
                size="20"
                fontSize="3xl"
                bg="blue.500"
                color="white"
                pos="absolute"
                top="50%"
                insetStart="50%"
                transform="translate(-50%, -50%)"
              >
                <BsPlayFill />
              </Circle>
            </Box>
          </Box>

          {/* <ReactPlayer
              url="https://vimeo.com/226260195"
              className="react-player"
              playing={false}
              width="100%"
              height="100%"
            /> */}

          <Flex direction="column" h="full">
            <Box flex="1">
              <Stack
                spacing={{ base: '4', md: '6' }}
                direction={{ base: 'column', md: 'row' }}
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="wider"
                fontWeight="semibold"
              >
                <HStack
                  divider={<StackDivider h="3" alignSelf="center" />}
                  spacing="3"
                  color={mode('gray.600', 'gray.400')}
                >
                  <Box>Actor</Box>
                  <Box>Producer</Box>
                </HStack>
              </Stack>
              <Heading size="xl" mt="6" mb="4">
                Justin Shenkarow
              </Heading>
              <Text
                fontSize="lg"
                color={mode('gray.600', 'gray.400')}
                lineHeight="tall"
              >
                Known for his roles of Matthew Brock in Picket Fences, Simon
                Holmes in Eerie, Indiana, and the voice of Harold Berman from
                the Nickelodeon animated series, Hey Arnold!.
              </Text>
            </Box>

            <HStack spacing="4" mt="8">
              <Img
                objectFit="cover"
                rounded="full"
                w="12"
                h="12"
                alt="The Water Project"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaGhwcHBwaHB4cHBoeHx8eGh4cIRweIS4lHB4tJB4aJzgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHzYrJCs0NjQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADoQAAECBAQDBwIGAgIBBQAAAAECEQADITEEEkFRYXGBBSKRobHB8DLRBhNCUuHxcoIjYhQVM0OSsv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAICAgMAAQUAAwAAAAAAAAABAhEDIRIxQVEEEyIyYRSB8P/aAAwDAQACEQMRAD8AycTPCRUXH9RmlAUemlyRBO0Z4UABpwrW3SL4BJKiT+kUpR9nINYmW3/AQ/2ZhcoJIroeG0PpmAM8K4fEjKxZ/nhEYplIQRQ1Cwaj6qEHZnvqDFclVIpRvY6ieFHwvx0gyFg2jBRNUlTFQ/aTw7zEnmI1cPNSGAetrl7eF4tOxDBFYZw5pAJdzyMMYVPdNIG9AkH/ACgRxjPxAUQSACX8dTGthkApIP8AXGEkpcdT6KMKMuxtBMMe7woSqtKu/wAvELcIB0NhzzPTSOwKjkUnTuvyK2boX8REypKlgAEEhBYcLeLkeMP0T6B/+SQoPVOWoZgeY1i8+YucUMQMrpH1MyQVXzOVaeG5gWIQUPmSoEs2zEXfwgcuhSMzDKo66hn8KeMGiWg+AE0LTlcldGTS5cjl9tIx8UlSZxBBfIWtUpOVx0EbGExZQpKnzVDDQeFQ/rzjG7VUoflKuxUkVqXN3gGuyUywqWC2p4KNBq9qesWoMqf+rk8+cVkzO4QwfNT/ABbXjU+HGBlRUkEgAjw/kRbYUSpdHeoPiNQ3L0ESiWSiZYZkkZti7pGZrkgWZ2ga+7V9uG1oBh6pIJZqXOxAZm0YdYiT8HRfCIIIeoI8xWjWisxwTlfcCz7n+ecRInl0pBsqg4KcEE9BBZiFkhL9Rox3N6PCvQUiMTISEJW4J7z1LhiKGlN72I1hPCzzYgVBYfeNCckpSAQNioWPP9sZygApKh0HLXrWJkqaYuIwuYlshqoluIHE6GjPEYdZBsSCHc6Uf7RbE5EoPdKlqrwCR3iqhqXpX7RfDKZdDvpUgi/n0aGv2oROIUGfYu7XHwQ5JmEoAJAKynM4fKxCQW0+o22hGctwQR41D6U6XhtSwllp0y10CqHjqDQ7xrewaB5HUotVt9teP3hdBD1NPlIOnFqChQUcf5Px6CFgHUQNTSJjLbB9DE5fdCaNmod3/gQmo1gk2iqW02Nb8oFiEs8DkBo4VEnInMCS1e6faOhOXOYAV8SI6HyI4swkLJNeP9xoImEIBSeYAOm/mIGlCcrsA4Z/Pq7RC55ozu1RqdI5+0bEz0qLkOBS9dBRxwJ8IewM/NlQW2c1B1hDDSnFieFW0hyXLUlTkEcQA/26w0NaNH/09JNXOhLt5CkMSsIlBdIbQ1NvjRaQafDDCRGoHSBfkYYw30q2DFvf5vC0s1pWG8GUlC8zswNG8D9/vCl0JD+BQcygW7odiCejDV2jPwKiWBZI/MAc6d1fRoLIxQQpSzUtQcSzu7wpJSkuhIOYzEsHo2VYs+jiJS7BspgcVk7xJAC05qiqSQT5sf8AWNCTgz+WhbschV1zhITs5BJ6R54LNQATmagOx5cRSD4btRaUoQXVWqSHFwoF+IFeL7w22ug0aGNXldJuQl3LlsrtyraFlTAACO93dj0Zqm0LImrUp1EXs5q0dPmLDMQAwHH0hxWgZfv5VOxJ2ag0Z6g2rCGNKsiSakElxpZw3y3GNPDLUUqVkzEaA7X048YTxqXQsuz6dH+x8YaBEIIY6uXc3o/zoIrNlBYGYAppTlpyimFmjKHurhBs6tEmmpseXlFaYUSpAcOH9BESEEKOQjvBSS9AzFyT4jqN4IX4PFVSiAQmj1DUYhjvuIJLQCcmWMygdW5tw8YYUAGA/S0Vlrqf8QfP+ourSlaeoidUNB8TNSZWUpP1ZiQ3IDfbxjGmgZgUWfQUfg1qt5xpTSCgpKgCdKO92gMmUEoKddWu9/WE1bEhaTiHWEsC4Kain0kP5+UWkoUhaV5nZQpXRtRFsOg5llQcpfKHIuBbe/pBFqJUMt0srhcGoiUtCovOn5gc2UOSzAUqxtcXIg2FmJyVcHMhqO/eYhwDobUtA8WQ5XQZlKzNRwe8W4DbhFsNMGRSHsxFdKqYDmU15xcXXYVot2zLUFrUpBQVd8WsoZgQwYUL/aMn865qK66w3iZxJqdAL8GhQpptUiorz5faIl2FaoJiJ4JcAAUtaze0CXPzCgq0DI8IqkkGJcn6Sw8tQYR0B6x0HIOQFc2mVhp0jpEkqdQuaD7esSUZiGapPEsKB/CNjDyAAOBfyaEkapUXwsgISNzeHAgFngItDCDGggku3WLvSAg0i2akMCJaq8gYaw6xkUNTl93hIHvHkYPhyyfD1hMKHJqAQpVmAp0a/wAvGcFusGruXO/WHvzO4vVx/ReMsL7wfj6Q4sTRZmQlVaLbxB+wiFhIKC1SkA6/9h7xRa/+Ihh9YL+MDxM2gJ/SAeFL+T3hhQ6lCchIb6hpW132gayKOHOnOKS5isjfpKjyI3pwMDmKYMkWDD5tAmFBsNNWkFkFZFS1mfhfwhLF4gKK+61gCBqKWeo+awdGKUkLbMl05XoQxv1s0ISpxCCANdtOEK9jSLdmrOUEs3g1SIdUtWjM7V9oz8Ee6RlBGax5DeHZKhU1YFrcdGFoaegoushnuRT7wRCw8LzkukZgaF2Fuu44RaWskOdX8NPKHYUKTAy6PTXgS/Wr+EcvEKcEBTOHGm9IEnFhRCsrG7XFykcBWNFIoNLxlFW3TKS9Imy3IUBbTqD6gc4Xws2q0uCzEkbn9PzSHDUXPSkLoIS4DBy/Pj5Rftio5SlZkmrMR7/eDJQK8fOBJX3TW33v4PBETcyb1BD8Nod0wogqhWWggkaEMPEfaGsz8ejwriBYbGm/lyhSYuiVyg9auREiQAFVqktXZj6+0RKxBowf9rVqzF/msDTMJzJIJ1I14/OA2iXK2mNMooB3PHk4rAJuhZoZn6D+a/PSFpy6EEQpJClGwOeOgWXZ46M6ZnxYTDrJWFG5Y+zxuSVhtR8aMOShJJCXt56xqIlqVXwr/dYtdG45nFBB5cY6JyszNVxxYPfyh1E7vtmYMX+H5WHeiRzQRCjSA/msNw/rF8/lDsCdTBUK7p5QF4si3SBsKGCuhaFQe9XQe0GJoYVWe9/qfSEmDRSb9BYfGiZNUgkXCYg/T1i0ksCmzL93EXYURh0kAd7dJGgajvrEqMQ5dWxMdmY7w09BRK5YAvx5GE8Ss5ipJo9jXzhnEHMB+lvO5hZb1JbZwDfY/wAcIzcq7HQCWoOpxU2veuwvDiZFCHOh15Fi7wgn6iwrS3WpMOy8QA4UWIo1S/HeBSXo2HBOVySdr6tvHIXQbNAVzSUbUesUlTu7Z9+EXyVBQKfLJVnSwcBjx06WvGliEZCEuSUgZswA7zd5mJdOxeojLWs3qwsVau0GmTyS6+8VEmnGMk3yvweqHX0GnpCmJkZikiwUCeQsPGLTphbus9Kb8uMFCgeca6eg42QUUI+aGB4ZLOa97S9j/cXKq8LR2anXfQh/vA+7CqDJdqf3CmJm7ioIb++sQmeXZVoFMAYsdPnKJcrJ7Bzr1AOoNfPrEY2gRVqVbjp83jlkljyFPnAwbGAFCy5cKTlS1CnvdR+mj+kT2LplEUSxrzd/AxSeQUhr1BG9mO0UVNcBXDW+3tC6y/SE5CbplfyuJjo7ONj4x0TZWigxqqAFvjRoSsf3W1F+MY60ANY08IOJw0AEUJMdlzgEkuxJ6s0SoFSu6Ka7l9ITE0AgjSo1c7mNHsq7+GztaAa2MIzEAFJYFzq5pflDcmUTsHqdYumW9agv4iGEJaAdAUoY1rxgyBSJaLoTFDooUwtMbNcWhxYYHeM+qlMUneum3I8NISCisxLWMclXfUP8T5EQaYkkbwpO7sxKqVdJ9RDsKC/qFLvXR7/eLTEx2aj7VjlLBLaRSYUCXMP3hbO4JYXLPp8EHWKQqiJdMaQGSO+XsfZobWAlzvc3hZKbkWDfx7wRKtDtE66odBVgBFCw3raKyEZkljq9NX0iqVsC49+FtIrgODj0vXhBasKYWYtwRlrY+PlCaS4cq6DSrVO33h+ahw5AFQ43H3hOckJYBITmarM7XvpaE1slxCSJmalQoEVu+jgafzDqRSoavjxhOTh1DvA8hof6h6uUPdg423io/wBLin6DNCNoqZndYAPpvZvCJd/nSIWg5qaD3HneFKVsHEiWg3Lg6/xDCEixiVySGvYEcjURDQ4tUVwoXQ+Rtjp/1Lim9fOA4pYJIAYO59QWEWGYFY2NOsCd/PYGFJkUKzJhYJYMCSDb5/AgJUNT7w1LAyLcVo1LV71fCEVqq8ZmMlsrkEdF3Gwjoqx8RcJrt89YuhGoirxCFxVgEzRu9mrAQ6izsw51B6x59IYxtYCWQAtswAsbjluIRcUbcswVBjNkY0FRBsNq+MNy56TY+39wWNUMiLpgJVBEKgsdBVQFSYOTFFJgTDiKq21hXFo7r/tIPmxhyYisK4gEoUNCD6QxpUUnoIFaNvpCiFgmhdqdbfOcOTZ2dIUXKiATxoPOMmYpSCWZr+xFekFv0KHiXhdau80WkzAbPUPyMdMGuorBZSVgkBwrh/NfOC5DQiKJQK3qOWxd/lIYRUA6cPFjWM3LYRWwExXdzeI3FukVkhltZh4WNIYMolxSxB6xVEo5wa1A9G9YuLstrQeeO4ovoavAZksEy3qCOlQ/qEtzO0NrQQkvsfSKKR/wpVfKAoP/ANf4eGnsUojGFkgJYffjErlvBJVuEMolv7MDXkYJSouEbQmvDgDjCmIQApJdwR9/tGliy5dmoBd/WMua5RX5VveJTtbFKNM9N2vJSt1oJ7iUg7FLVI2YvfSMFZAvBzjCEBjcA016s+0LqmBmyk6PeMoJ41V68L01oVQj/kV/2SDalOMUnyzmLXYU8eukWbKtJ6DeLIWSt2o4SaCjsByqYbyIhK9VuzOWL5g1aedH1v8AGhZcqNntGWBm/U2UtYXIv18oyspyggU1b5SDlezDLjcZCuTnHRfKP3jx/mJiuRjbFAowVCbwMJekeq7M/Bs9aBMWQhJAUAoEkg6lvpglOMVbLSPO5CeQ6iN/sr/2xWvj5RnTpBkzFIXQj9p7pfUcI9N+VKRKSoEpzfSK1r3jU/KRlLMo17Z04sXJNmPjMOoEqDPodDwIicKtSwxFtSNA/VoYnzgSC9HGjE62OnGLypqCSBfo/OnKNVJMylGg6U0p4bGCoEVJAF3HmOkbv4awoWQv6qsnnvGeXIscbYIS/wDFXlfItv8AEwumaxtH0ReDLVKRzjy/4g7OGXO6M1iAa3vSMFmlyqapMUclPRgzFglwBy9oXmrJvHWgsrCqXRHeU/0gabvoI6rjFWzZtyMmUCxT+1RHS8K4iS+poaq15CNpWEXLWtK0EKWxS46FjrpCWIlFjTn1h81InhqzPknIXLGzizw0kpWXHdG1aObAlz1MWl4IKQlZazmt6s5fR9IVxGYKyijmmpNS1teUQ5rw0UXHsMlIC1JuKgWNGpaGcNhQUhTuprD+YQlLIXlIY/SxDEG1dXvxjb7LUFIYrylNBS1XIPw3ERkl+Nl4knJ6F5Moku1XPysGQkZ0/wCR/wD2Y2JOElBYUFOCRtTrZjx1IjJ7VUETAAoGmanNvVJ8YWHPbpfBU4JIPiZfdbLoeL3heQjuAXcEc7iN9MhU5Ckgh0uwZjaxO1belowsKhpSeJV5KVrDw5lJ0+7FNK9fBGDmdzNR2q9nFD5iNfBSPzGSkjMkOBov9Tc71MeeQS8xDOAUqZ2JCrt/t6x6vsySlATMYlBAUybpBGaooxA9DwjP6nK4vXY40omKuWXPm8IrQyFtoFEPYEMQfGNzFpZRGUpeoBu1hzPu8ZS1MVg6gBt3o3nG8Z8oilHpgsCkLSl7cNTtw+bQ4mXmIASk97QCzPXpGbhJpSKEJAV6sf5j0mBlEKSsKBCnfK1Db023jk+py8bNMTVGV2zgWQhYAYqsNHcs7WhRcvIhXd+kgvV6EEgnUU8o9b25gs8kZNCCXJLC3vCfamCIlM6VkoL5QxBIJJLXTWOLF9UpJL+lJxbt+6PP43APMKUpVVBISHJcGl6Za+HGMhCSUqABZkqvQDR2pvGvhJikTJbKbMkauyVAOB503hQSgJsxAoEhYdLd8JOax/6uY7YTpNfxMicU5Jnn5qACWB8RHRppkAh3Fd0/xExt91fBn/jr5QLs3B5lZn+kcRU2HqY3MN+JsTJJZedGxovZgQK/7AwmuT+SQc6SlQAUwICDQBQqxtdvVoDKWkLKV1BsRY84STlO30ck5xekTi1jEzFTFOgXLgOC5KgKNrQeUaMrDHIgh82V0JLMyneg1YG93peA4GahGdGRJTRQKrhIDkUFQ48QLxGN7WBYoWi1AktkIILhw+poePKMpKXOktI7sSioJr4ASiVFq5uA3t7R7H8Lfh6WlGec2dVgtJISORDPzjw8ie61OAQo1LsDej0DUKvPSNeRiXJyTTyQogjwNR0isspqvg58kU12b/bnY6UMtBRldjlUGL65dNdInAdqypQCQpSlD9iWFa6tvHmcX2gsE51koIssB3GxIfzjOmYwjKUKSAdVAkjmzsIl4ZZYJeX8mSqK2e8xn4mSgOUMN1rv0ALx5+d+J5i1ZPyUJSoa5irKdWChHncSlSi6piVHgadHAB6Q9g1sUH6ikg6aV6iltYuP0kIrlLbFCpM3V4JYSCRV2D0JeooS/wAG8LnOFLQVqSkFjl7pUeJFco24xoI/EQTnUFqUwzNlyoegyZrgG45aRgYr8SrWp8qEqJ7xAJBDMBUu4u5JttGdZstqtHRKUYonEoyqBlHvBX7jU3AOxtDmJ7QJVvV+93nLF3BoTerQXA9nIIzKUoqo6nUOIYAtrxgeJkBBJHefunNUqL8E0tFY0ounsISvRmo7ucEgEF62ANR5vCaMWQtKkHvJLgli55ERPa0/vJAJAYBnJYA6kwggl+UddWqYPUjTRJmTiuZdQzLWQ2ZrlQGsWlZgMz0WSQ+4LOR4dQdonBTVoGZgxBHeJBIIYEEFxe/SoLRRc5X5f5de6SQ7mv1GxbfxEY3+VKqKTTCKmlr08PlYDOmA1eAy0pUoFSmDZgWLOA5SdtRBSXoNI150S0aWG7ZnJSUoWQC2xfLapqLNFBjVlGQqdIUVCzua3624wjJlubfeGJMqpFzRw/Me0Snji7S2DUmEwUz/AJkbLGQ6NWhpqGfpHrMZ27hUD8uXmmaEJAYnfMSx6OY8DiVpzmtP4Yx6fsHDJEpKwO8QS/UiMc+JNcpGbl4QvGTJiiShYSAcuYig2jI7T7SKFOB3lCj2Fq0v8MPY7tMoBQaF2tpqYxV4lC6L7wux3OrisVhlrrQPJLoJhlihI7oCS1GLu5j1f4fnpM4JSxSxJGgIYONNfKPE45CciSg5UB06Vq4Ba+t4c/DnaBkzELooEFJBD3o/SJ+oxcouvUXB/B9bASPqPdN9gOPCB4/CqQykNcUNX0YU7tOkeZH4gBDZVJP6lAhyeo+dY25vbyMiJUw/WEgqIYCgqRoH14GPIx/TcLUlvwbhKLT7+TxgHekAMlSF5MzOAcxSH306CKdthUrFJCFDvlPeVX6nllR4EVL7wDtVeVyg/TMWpqUDhQLOTY/3CHbmKC0IUHzEqzHQ2IY8C/jHoY4tyT8ao3nTV/AxMw6wSMss5SUuGD5Tl1HCIjKVgpiu8EvmAL7uHiY34/1D+6/hnoO3EOhWVu8lSQN3FL7HwhSV2b+a6kIUjQhYyhyzHML2NRxhaX22HzVJpS55PZvlYib2xMJUoEgFLAXHVrw8cXFpSujyu+hXtNAQclykMSHrrZqRny1vTd3PCDzFKWSpVzt84QLE4cJFaVodCRcPHQqUqOiNqFhsMsKWlLUJNOAG/SNlaJYT9ISdCkMQdK6+fGMDAD/kRV3Pi4b3jS7WUZa8qv2g8KivPbpBJXkUfKMuWm2RiFCpfMrc/cwoheWwbd4Cue+/hFROJo8dKSSpGTPUdn4BC0JKkVU9XINzsYIjsgIcoUQWYBVQH2sR5wbswtLQKWA8f7hn8+wevpx8jHHKb5M1iq2YePmFElCV0JmKegYsKOdaHXjGHOxQJpXo3pHpPxGSZNAGzpzONK+7R5RavlB6RrhVL/YSlZ7DsrFH8tJB/S3hGyhGdNCLUNG58Y8Fgu0ChBQLlVFGyRaPSdm4tcsIQFjKR+q45P8A1aOTJilFtr/kaQlezO7VQAsDKVHOoElLOWDC9RR+sGXg8oQ/dJNQNk34NS8a/aMtwmYzlNTxBptoIzcfPUUElTsQE00L+GnjDUm0kdeJqcqfbEO1MaoqSAyQEDa5PeNOIA6CAdlYoZihVQqx1SrQ8qRn4mdVzdzAETqhvWOzHCKhSObI+GbT6ZtqV3iLEEgijPrSLpIfSFgjP3ySFG7bszxOFXVianR455pNOvDufDLG0qaNGVmAsGNn3FjAp+IKc7gVSC7Fx9QpzceUaKJQFXFuBcuxbfnbjGZ2sHKspcBKBzqB4CkY4mpSpmOROMTLMwHTxj1/4b7SQmQQshOQkV1BrQXNSRHiFzRo/Exq9l9mrmIzBWT9rip48BHXmjGUabo4E9j3bOHmTy6EZUixWcqiP8bgc2hDGyFCUhJB7pIdqEJAfqMwpxTG0mctDJmXNl6LbTgrVtdNWze1SVJUUqYo7zVq5ymwa2+wvGELTUfC09iQnFCCELVlLZmUz0NGBtwhv8M4da1KIDhKVE12KH9fMxloLpIG+g4/1D3YeJTJmkrdikpparXfSmlY1zW4OuzTFqSPU43s5UtIUbKJ+/ysZcwZjRyQHO7u8en7N7OE9OefNUmUkMkFRABBDgZqWoS2rQr2diMPImLUpQWhlJFKKcJDVDvXalY8yLffbOtz7XweWQglS33Hg3vSM6chVQ7tv6kbtHoMZjpZmzlJSrItikPUXqb5vHU84w8RMBJvW/wR247vowyzSiaWA7RCZaU5hR9AdTwjow80dF/aRh9+RWaGoCR1oOgo8CRmBqokaa/1BSgHjyiVsLabx1Uc3lh8HMAUFKSFAfpJIBZ6FiKQftqYFoK0gjvElIoEOQGbbjqfNfDTgklT2cpDAh9HBo1z0jgkrLn6HALCiaWawoCByjncfy5fB1Rl+FfI7+G8JleesUDhA3NQVe3jAu0sUlamy0Bo9+IYafaNaauWlAq7DuoSC2wBMeXxKjnVzJvZ6tSFifOblLzozkqVBFrFgIosjYAxXMeEUWp47EYnr8Et0JI/aPKnzlDOHOZa+DN5+EeWw3aS0ICRVnZydzpGx2VilFDqyk5nOXQGgHSODJCSbb6NotPRqYnDCYhSCQM2p0IqD4h488Pw4slhNkvsFG27lIj08o11sYze1ZYlnOmgewZq7hq3+Wi8GRdCkjPR2L+WhS1FExg4uB03r4xVZdi/t8H3gvanaxXlQAyQEqNfqJDi2gBtu+0CkTu73kqY7N4O9uka5a7Q49GjhO0e6QtyGO9RxLUG70hXtNQSnughNH2D1Z9RUQGZMQWVWhAPefKN8rAdLQJWKSEKACQK3AVm27pAA3tGMYK7N8U3CSkhFMpCnUavQAfeL/kIT+l4TmTm+m0XmIWlCFq+lYJG4YlNRo7Fo6FoynLnJyo0MNiUlJH05WAc84Y7GSleIAU4CnzFh3Qa5q8WptzjEw85i8eg7KAEyWsk5cybAEte36rWjDNHinXqNcUm9WM4mXkWoGoCmDpYty0Nor2hhkqWhKFOFoDa1Y5k3vRmh7trt1C1lIQkpQU5TVIYEmoIdy9dm1jFl4sIWlaQwQpw9Q12POObGp9teG8pRaFE4JEtXfBWqhy2SlwFBzcmH0doK/6gcB7kwpj+0M61LKcuY0T+0WAHABoAJ5FgDHXGPJLl2ccqTdGuvtgFORSARuCelDZtwYBLwypqFkKCSAlQcgBQCmIDn6qhXJKoyVzc2jQxgsUsFOWrG134esDxKO0TGVMTQgAqSxLW4l9QOAMSup2MOrmIWSqo7pu3jCYX15D7xox8qNpWMJDZ1FrOSeerGFFzvM125Qnmiq1tGKxpdGjztoZVOrw2gC1A8IoV8opMVSNIowlKwvzSOhb8w7DyiYqiAijcxVcx6uGPjElYBjlrGUsP48I0QFfcekRImFKwq7aaQNJYRfNq0Jodmh+cpXeWRwApCE2WxL76ekXlXJjTwMtKiEkpchgm+msZVwtov9jFcRzxvL7AFx7/AHgmH7MymiQCLFriD76rRPBmcns1ZQDmSCf0mh8oPgpK5a0jNmSo5SAKgqNGBvVo3EIyiwHDeM/Erc8bjpWMfuSnp9FxSTDjtAJNT94S7X7RCwEA/UoP5U9PGNjH9uSpiFZ5SDMUQMwQmzNucrXYNo5jy2OATlALgWLMTW7aWtBijvaNJR1YRMpnu2whlWI7qQKUbnp7dYDMWUsan55Q7KlYdUkLWtlhY7l3Rc0/c70NCCKxrNqk2KKttIzM5KqAb6BtNaRXGUFC/HhF+0FoUtRlJKUGwJzEUq58YXXMYMDFRV0yG6tCyUEkPaH8TOSoMlOUMKO4oABTRt9YABvc7WEQT83hy2xKVKgAEaEnEqASAWKQwYVF9b6mAyjU0Hhp7QUZU1Ki1wBrwJswbbSG/wAhJtdElfzaLLnVpWlCL0v84QCdPKhYAX42a924c4qVMx1BZmZtb83g4opSIxCiT86wOVMNeEMTpqFAOCksKix0qPeFzJKS9xXqKfeBdESlsKLweWS1KGKqQS1dI5Cmd/HyhvoFpglqItStC/KJSGMEWkkdOnykCzc4nwGcF1pHFL1t8/uIAGpaCEg68PZ4QiECjtRv4+8LzT5w+oMlI8eunk/WFFIqSQYIhVi8y5joI0dF2Oga11/oxWUsh+MSVvpWJlIrV4ujNFgaxKDBBK4iJEmr5j6wtDLIDiGuzFgTkZiAHuSALG5hZ2P3iENmGaz/ANV2iWrVFRPaoxcs0M2W3+Yi68ThxebL6KB9I8iFp0AaBYtsoYamOdYE32aN0j1U3GYc/wDyJP8A9j7RlzsZKSXC35JV9ozpC05A7WjpsxFGFfCNFhSZNllKcki1LsDx+PAMcfT5XWCSVU4/PCB4nS+gpAls1f66H56HQBwG3vAEIFS3s3ykXnzHDMeXy8ckpADvyFC/z+4rjohvYP8ALBobnwMLjDgEANme9/4hictRawHmesVSioe2sPozbBKQxbdj9/N4EE1HMU4Q4mWHqRaj8t4tOkihSaszVJG9xys8Kx9iOISMzJenmNWihl05H1/rzh78hnehptzYesQqSBq9enhs7xSlRXFgZcsXUzAaamwH34RXIdbw4AcuUEAXtV7XLsaaRQo3iGxqkL4gChoBroAXNukUw0zvZbg3HvzhxILMGO4Ov8wISgVZrkXBvw5n1hp6Ik05UUXNyXqCKHeLSUZ0u4CRffjSLy1ijgljzetQ2ogiVEUVUg0O/CG3onlXYKcsJYgUoK3q99je1oA4oWoasNND0eGS1UkULmj9buNDAclO6bF+IB+ecJDuyqpW1rgwaRLrURJBozDfWIz3beEyWysyY5Lb05aWgExbi1RY+xi6t9ork9YaRUbBUjot+TtaOiqHxF9oaSkZbR0dFkHS7/NjB1XHMR0dEjQpNueXvA13POOjoaGuxsewiMX9KORjo6J9RT6ZaV9IjjdUdHQ/RLoLL+kR063UR0dGb7LXpeaosa6RPZ1Sp60V7RMdGiJZBvFhaOjohmLAm8HkXMdHRLLReZcdYqbGOjok1XR36Tz+8Dn26D1ETHQ0Jdih/VzhuVf/AF+8dHRb6Il+wDX/AF9o6Z9P+qfaIjofhPoZNlcj6Qpg/rjo6BBH0YTpyV6wKfbw9I6Oheh6dr0PpESbx0dD8Lj4Xjo6OgNT/9k="
              />
              <Flex direction="column">
                <Link
                  href="https://giveth.io/project/help-the-patagonia"
                  isExternal
                  fontWeight="500"
                  _focus={{ boxShadow: 'none' }}
                >
                  Patagonia Wildfire Emergency
                </Link>
                <Text fontSize="sm" color="gray.500">
                  ALL PROCEEDS ARE DONATED
                </Text>
              </Flex>
            </HStack>
            <Button
              size="lg"
              onClick={toggleRequestModal}
              colorScheme="twitter"
              mt="3rem"
              isDisabled={!account}
            >
              Request a Digital Autograph
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}
